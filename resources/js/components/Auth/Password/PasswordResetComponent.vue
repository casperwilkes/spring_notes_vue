<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Reset Password</div>

                <div class="card-body">
                    <form @submit.prevent="reset" novalidate>

                        <input :value="token" name="token" type="hidden">

                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right" for="email">E-Mail Address</label>

                            <div class="col-md-6">
                                <input
                                    :class="errors.email !== undefined ? 'is-invalid':''"
                                    autocomplete="email"
                                    autofocus
                                    class="form-control"
                                    id="email"
                                    name="email"
                                    required
                                    type="email"
                                    v-model="email">

                                <FormErrorComponent :errors="errors.email"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right" for="password">Password</label>

                            <div class="col-md-6">
                                <input
                                    :class="errors.password !== undefined ? 'is-invalid':''"
                                    autocomplete="new-password"
                                    class="form-control"
                                    id="password"
                                    name="password"
                                    required
                                    type="password"
                                    v-model="password"
                                >

                                <FormErrorComponent :errors="errors.password"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right" for="password-confirm">Confirm Password</label>

                            <div class="col-md-6">
                                <input :class="errors.password_confirmation !== undefined ? 'is-invalid':''"
                                       autocomplete="new-password"
                                       class="form-control"
                                       id="password-confirm"
                                       name="password_confirmation"
                                       required
                                       type="password"
                                       v-model="password_confirmation"
                                >

                                <FormErrorComponent :errors="errors.password_confirmation"/>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button class="btn btn-primary" type="submit">
                                    Reset Password
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

    const FormErrorComponent = () => import('../../Elements/Form/FormErrorComponent');

    export default {
        data() {
            return {
                email: this.$route.query.email,
                token: this.$route.params.token,
                password: '',
                password_confirmation: '',
                status: '',
                errors: {},
            }
        },
        methods: {
            reset: function () {
                let data = {
                    email: this.email,
                    token: this.token,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }

                axios.post('/password/reset', data)
                     .then(res => {
                         this.flashMessage.success({message: res.data.message});
                         this.$router.push({name: 'login'});
                     })
                     .catch(err => this.errors = err.response.data.errors)
            }
        },
        components: {
            FormErrorComponent
        }
    }
</script>
