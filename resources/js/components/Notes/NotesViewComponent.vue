<template>
    <div v-show="note.id !== undefined">
        <NoteBodyComponent :note="note" v-if="note.id !== undefined"/>
        <CommentNewComponent :note="note" @new_comment="newComment"/>
        <CommentComponent :comments="comments"/>
    </div>
</template>

<script>

const NoteBodyComponent = () => import('./Elements/NoteBodyComponent');
const CommentComponent = () => import('../Comments/CommentComponent');
const CommentNewComponent = () => import('../Comments/CommentNewComponent');

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
        /**
         * Adds a newly created comment to the comments array
         * @param {Object} comment
         */
        newComment: function (comment) {
            this.comments.unshift(comment);
        },
        /**
         * Gets the requested note
         */
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
        /**
         * Gets comments associated with a note
         */
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
        CommentComponent,
        CommentNewComponent
    }
}
</script>
