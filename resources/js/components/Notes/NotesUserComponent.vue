<template>
    <div>
        <div class="row justify-content-center" v-if="notes.length === 0">
            <div class="col-10 col-md-8">
                <div class="card shadow">
                    <div class="card-body">
                        <p class="card-text text-center lead">
                            You currently do not have any notes.
                            <router-link :to="{name: 'notes_create'}">Create</router-link>
                            a new one!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <NoteBodyComponent :key="nid" :note="note" @deleteNote="deleteNote" v-else v-for="(note, nid) in notes"/>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import NoteBodyComponent from "./Elements/NoteBodyComponent";

    export default {
        data() {
            return {
                page: 1,
                notes: []
            };
        },
        computed: {
            ...mapGetters([
                'user',
            ]),
            query_user() {
                const route_user = this.$route.params.user;
                return route_user !== undefined ? route_user : this.user.id;
            }
        },
        watch: {
            page_bottom: function (newVal) {
                if (newVal) {
                    this.page++;
                    this.getNotes();
                }
            }
        },
        components: {
            NoteBodyComponent
        },
        mounted() {
            this.scroll();
            this.getNotes();
        },
        methods: {
            getNotes: function () {
                axios.get(`/api/v1/users/${this.query_user}/notes?page=${this.page}`)
                     .then(res => this.notes.push(...res.data.data))
                     .catch(err => console.log(err));
            },
            deleteNote: function (val) {
                axios.delete(`/api/v1/notes/${val}`)
                     .then(() => {
                         // Remove incoming value from array //
                         _.remove(this.notes, (n) => {
                             return n.id === val;
                         });
                         // Reinject remaining notes into notes //
                         this.flashMessage.success({message: 'Note successfully removed'})
                         this.notes = [...this.notes];
                     })
                     .catch(err => {
                         console.log(err)
                         this.flashMessage.error({message: 'Unable to remove note at this time'})
                     });
            }
        }
    }
</script>
