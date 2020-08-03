<template>
    <div>
        <div class="row justify-content-center my-2">
            <div class="col-sm-10">
                <form @submit.prevent="search">
                    <div class="input-group mb-3">
                        <input @keyup="search" aria-label="Search Term" autocomplete="off" autofocus class="form-control" type="text"
                               v-model.trim="term">
                        <div class="input-group-append">
                            <span class="input-group-text"><font-awesome-icon :icon="['fas', 'search']"/></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <NoteBodyComponent :key="nid" :note="note" :search="true" v-for="(note, nid) in notes"/>

        <div class="row my-4" v-if="show_more">
            <div class="col text-center">
                <button @click="search(true)" class="btn btn-primary" type="button">
                    Load more Results
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import NoteBodyComponent from '../Notes/Elements/NoteBodyComponent';

export default {
    data() {
        return {
            current_page: 1,
            last_page: 1,
            term: '',
            notes: []
        }
    },
    computed: {
        show_more: function () {
            return this.current_page !== this.last_page;
        }
    },
    methods: {
        search: function (fetch_more) {
            axios.get('/api/v1/search', {params: {page: this.current_page, term: this.term}})
                 .then(res => {
                     // Set the pages //
                     this.current_page = res.data.current_page;
                     this.last_page = res.data.last_page;

                     // Check if fetching //
                     if (fetch_more) {
                         // Add to current notes //
                         this.notes.push(...res.data.data);
                     } else {
                         // reset notes //
                         this.notes = res.data.data;
                     }
                 })
                 .catch(err => console.log(err))
        },
    },
    components: {
        NoteBodyComponent
    }
}
</script>
