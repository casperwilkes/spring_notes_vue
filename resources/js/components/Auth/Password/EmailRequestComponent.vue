<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Reset Password</div>

                <div class="card-body">
                    <div class="alert alert-success" role="alert" v-if="status.length > 0">
                        {{status}}
                    </div>

                    <form @submit.prevent="resetRequest">
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right" for="email">E-Mail Address</label>

                            <div class="col-md-6">
                                <input :class="errors.email !== undefined ? 'is-invalid':''"
                                       autocomplete="email"
                                       autofocus
                                       class="form-control"
                                       id="email"
                                       name="email"
                                       required
                                       type="email"
                                       v-model.trim="email">

                                <FormErrorComponent :errors="errors.email"/>

                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button class="btn btn-primary" type="submit">
                                    Send Password Reset Link
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
                email: '',
                status: '',
                errors: {}
            }
        },
        methods: {
            resetRequest: function () {
                this.fetchToken();
                axios.post('/password/email', {email: this.email})
                     .then(res => this.status = res.data.message)
                     .catch(err => this.errors = err.response.data.errors);
            }
        },
        components: {
            FormErrorComponent
        }
    }
</script>
