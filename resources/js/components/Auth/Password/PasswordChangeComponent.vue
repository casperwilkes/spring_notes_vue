<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Change Password</div>

                <div class="card-body">
                    <form @submit.prevent="change">
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right" for="password_current">Current Password</label>

                            <div class="col-md-6">
                                <input
                                    :class="errors.password_current !== undefined ? 'is-invalid':''"
                                    autocomplete="password_current"
                                    autofocus
                                    class="form-control"
                                    id="password_current"
                                    name="password_current"
                                    required
                                    type="password"
                                    v-model="password_current">

                                <FormErrorComponent :errors="errors.password_current"/>
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
                password: '',
                password_confirmation: '',
                password_current: '',
                errors: {}
            }
        },
        methods: {
            change() {
                let data = {
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    password_current: this.password_current
                }

                axios.post('/api/v1/password/change', data)
                     .then(() => {
                         this.flashMessage.success({message: 'Password successfully updated'});
                         this.$router.push({name: 'home'});
                     })
                     .catch(err => this.errors = err.response.data.errors)
            }
        }
        ,
        components: {
            FormErrorComponent
        }
    }
</script>
