<template>
    <div>
        <NoteBodyComponent :key="nid" :note="note" v-for="(note, nid) in notes"/>
    </div>
</template>

<script>
    import NoteBodyComponent from './Elements/NoteBodyComponent';

    export default {
        data() {
            return {
                page: 1,
                notes: []
            };
        },
        props: {
            filter: String
        },
        watch: {
            page_bottom: function (newVal) {
                if (newVal) {
                    this.page++;
                    this.getNotes();
                }
            },
            filter: function () {
                this.initNotes();
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
            /**
             * Gets notes based on scroll
             */
            getNotes: function () {
                axios.get(`/api/v1/notes`, {
                    params: {
                        page: this.page,
                        filter: this.filter
                    }
                })
                     .then(res => this.notes.push(...res.data.data))
                     .catch(err => console.log(err));
            },
            /**
             * Initializes page when filter has been changed
             */
            initNotes: function () {
                // Set this page to 1 //
                this.page = 1;

                axios.get(`/api/v1/notes`, {
                    params: {
                        page: this.page,
                        filter: this.filter
                    }
                })
                     .then(res => this.notes = res.data.data)
                     .catch(err => console.log(err));
            }
        }
    }
</script>
