<template>
    <div class="row justify-content-center mb-4">
        <div class="col-md-10">
            <div class="card my-4 rounded shadow">
                <div class="card-body">
                    <form @submit.prevent="newComment">
                        <div class="form-group">
                            <label for="message">Enter your message here:</label>
                            <textarea :class="errors.message !== undefined? 'is-invalid':''"
                                      class="form-control"
                                      id="message"
                                      name="message"
                                      rows="3"
                                      v-model="message"/>
                            <FormErrorComponent :errors="errors.message"/>
                            <small class="form-text text-muted">
                                <a href="https://help.github.com/articles/basic-writing-and-formatting-syntax" target="_blank">
                                    Markdown
                                </a>
                                cheatsheet.
                            </small>
                        </div>
                        <button class="btn btn-sm btn-outline-success text-uppercase" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const FormErrorComponent = () => import('../Elements/Form/FormErrorComponent');

export default {
    data() {
        return {
            message: '',
            errors: {}
        }
    },
    props: {
        note: Object
    },
    methods: {
        /**
         * Adds a new comment to the note
         */
        newComment: function () {
            let new_note = {
                commentable_type: '\\App\\Note',
                commentable_id: `${this.note.id}`,
                message: this.message,
            }

            axios.post('/api/v1/comments', new_note)
                 .then(res => {
                     this.$emit('new_comment', res.data);
                     this.message = '';
                 })
                 .catch(err => this.errors = err.response.data.errors);
        }
    },
    components: {
        FormErrorComponent
    }
}
</script>
