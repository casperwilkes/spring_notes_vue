<template>
    <div>
        <NoteBodyComponent :key="nid" :note="note" @deleteNote="deleteNote" v-for="(note, nid) in notes"/>
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
                         this.notes = [...this.notes];
                     }).catch(err => console.log(err));
            }
        }
    }
</script>
