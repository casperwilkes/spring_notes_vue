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
                            <textarea class="form-control" id="message" name="message" required rows="3">{{ comment.comment }}</textarea>
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
    export default {
        props: {
            comment: Object
        },
        methods: {
            updateComment: function () {

            }
        }
    }
</script>
