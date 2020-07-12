<template>
    <div class="row justify-content-center mb-2 note-body">
        <div class="col-md-8">
            <div class="card shadow">
                <p class="card-header h3 text-center text-capitalize">
                    {{note.title}}
                </p>
                <div class="card-body">
                    <p class="card-text">
                        Created by
                        {{note.author.name}}
                        <br/>
                        on {{ note.created_at | moment(date_format)}}
                    </p>
                    <p class="card-text">
                        {{note.body}}
                    </p>
                </div>
                <div class="card-footer" v-if="!datesEqual(note) || authUser(note)">
                    <div class="row">
                        <div class="col-md-8 align-self-center">
                            <span v-if="!datesEqual(note)">Updated at {{ note.updated_at | moment(date_format)}}</span>
                        </div>
                        <div class="col-md-4 text-right" v-if="authUser(note)">
                            <div class="btn-group">
                                <router-link :to="{name: 'notes_edit', params:{id:note.id}}" class="btn btn-primary card-link">
                                    <font-awesome-icon :icon="['far', 'edit']"/>
                                    Edit
                                </router-link>
                                <router-link :to="`/notes/delete/${note.id}`" class="btn btn-danger card-link">
                                    <font-awesome-icon :icon="['fas', 'folder-minus']"/>
                                    Delete
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                date_format: "MMMM Do YYYY [at] H:mm a",
            }
        },
        props: {
            note: Object,
        },
        computed: {
            ...mapGetters([
                'user'
            ]),
        },
        methods: {
            datesEqual: function (note) {
                return note.created_at === note.updated_at;
            },
            authUser: function (note) {
                return this.user.id === note.author.id
            }
        }
    }
</script>
