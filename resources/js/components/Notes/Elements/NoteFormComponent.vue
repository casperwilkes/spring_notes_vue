<template>
    <div class="row justify-content-center">
        <div class="col-sm-10">
            <div class="card shadow">
                <h2 class="card-header text-center">{{focus}} Note</h2>
                <div class="card-body">
                    <form @submit.prevent="handle(note)" novalidate>
                        <div class="form-group row" id="title_input">
                            <label :class="form_label" for="title">Title</label>
                            <div :class="form_field">
                                <input :class="errors.title !== undefined? 'is-invalid':''"
                                       autoComplete="title"
                                       autoFocus
                                       class="form-control"
                                       id="title"
                                       name="title"
                                       required
                                       type="text"
                                       v-model="note.title"/>
                                <FormErrorComponent :errors="errors.title"/>
                            </div>
                        </div>
                        <div class="form-group row" id="body_input">
                            <label :class="form_label" for="body">Body</label>
                            <div :class="form_field">
                                        <textarea :class="errors.body !== undefined? 'is-invalid':''"
                                                  autoComplete="body"
                                                  class="form-control"
                                                  id="body"
                                                  name="body"
                                                  required
                                                  rows="8"
                                                  v-model="note.body"/>
                                <FormErrorComponent :errors="errors.body"/>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-2">
                                <button class="btn btn-primary" type="submit">
                                    {{focus}}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const FormErrorComponent = () => import( "../../Elements/Form/FormErrorComponent");

    export default {
        data() {
            return {
                form_label: 'col-md-1 col-form-label text-md-right',
                form_field: 'col-md-12',
            }
        },
        props: {
            focus: String,
            handle: Function,
            errors: Object,
            noteObject: Object

        },
        computed: {
            note: function () {
                let note = {
                    title: null,
                    body: null
                }

                if (this.noteObject !== undefined) {
                    note = this.noteObject;
                }

                return note;
            }
        },
        components: {
            FormErrorComponent
        },

        methods: {}
    }
</script>
