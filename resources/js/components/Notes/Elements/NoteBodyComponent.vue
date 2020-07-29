<template>
    <div class="row justify-content-center my-2">
        <div class="col-11">
            <div class="card shadow">
                <p class="card-header h3 text-center text-capitalize">
                    <span v-if="$route.name !== 'notes_view'">
                        <router-link :to="{name: 'notes_view', params:{id:note.id}}">{{note.title}}</router-link>
                    </span>
                    <span v-else>
                        {{note.title}}
                    </span>
                </p>

                <div class="card-body">
                    <p class="card-text">
                        Created by
                        <router-link :to="{name: 'notes_user', params: {user: note.author.id}}">{{note.author.name}}</router-link>
                        <br/>
                        on {{ note.created_at | moment(date_format)}}
                    </p>
                    <p class="card-text">
                        <span class="note-body">{{note.body}}</span>
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
                                <button @click="$emit('deleteNote', note.id)" class="btn btn-danger card-link" type="button">
                                    <font-awesome-icon :icon="['fas', 'folder-minus']"/>
                                    Delete
                                </button>
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
            },
            deleteNote: function (note) {
                console.log(note);
            }
        }
    }
</script>
