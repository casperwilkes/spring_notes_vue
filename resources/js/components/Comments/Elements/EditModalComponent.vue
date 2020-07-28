<template>
    <div :id="`comment-modal-${comment.id}`" class="modal fade" role="dialog" tabindex="-1">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form @submit.prevent="updateComment">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Comment</h5>
                        <button class="close" data-dismiss="modal" type="button">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="message">Update your message here:</label>
                            <textarea
                                :class="errors.message !== undefined? 'is-invalid':''"
                                class="form-control"
                                id="message"
                                name="message"
                                required
                                rows="3"
                                v-model.lazy.trim="comment.comment"></textarea>
                            <FormErrorComponent :errors="errors.message"/>
                            <small class="form-text text-muted">
                                <a href="https://help.github.com/articles/basic-writing-and-formatting-syntax" target="_blank">
                                    Markdown
                                </a>
                                cheatsheet.
                            </small>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-sm btn-outline-secondary text-uppercase" data-dismiss="modal" type="button">Cancel</button>
                        <button class="btn btn-sm btn-outline-success text-uppercase" type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
const FormErrorComponent = () => import('../../Elements/Form/FormErrorComponent');

export default {
    data() {
        return {
            errors: {}
        }
    },
    props: {
        comment: Object
    },
    methods: {
        updateComment: function () {
            axios.put(`/api/v1/comments/${this.comment.id}`, {
                message: this.comment.comment
            })
                 .then(res => {
                     // Hide the modal //
                     $(`#comment-modal-${this.comment.id}`).modal('hide');
                 })
                 .catch(err => this.errors = err.response.data.errors);
        },
    },
    components: {
        FormErrorComponent
    }
}
</script>
