<template>
    <div>
        <NoteBodyComponent :note="note" v-if="note.id !== undefined"/>
        <CommentComponent :comments="comments"/>
    </div>
</template>

<script>

const NoteBodyComponent = () => import('./Elements/NoteBodyComponent');
const CommentComponent = () => import('../Comments/CommentComponent');

export default {
    data() {
        return {
            page: 1,
            note: {},
            comments: []
        }
    },
    watch: {
        page_bottom: function (newVal) {
            if (newVal) {
                this.page++;
                this.getComments();
            }
        },
    },
    mounted() {
        this.getNote();
        this.getComments();
        this.scroll();
    },
    methods: {
        getNote: function () {
            axios.get(`/api/v1/notes/${this.$route.params.id}`, {
                params: {
                    page: this.page
                }
            })
                 .then(res => {
                     // Set the note object //
                     this.note = res.data
                 })
                 .catch(err => console.log(err));
        },
        getComments: function () {
            axios.get(`/api/v1/notes/${this.$route.params.id}/comments`, {
                params: {
                    page: this.page
                }
            })
                 .then(res => {
                     this.comments.push(...res.data);
                 })
                 .catch(err => console.log(err));
        }
    },

    components: {
        NoteBodyComponent,
        CommentComponent
    }
}
</script>
