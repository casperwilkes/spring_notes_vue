<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login</div>

                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right" for="email">Email-Address</label>

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
                                    v-model.trim="email"
                                    value="">

                                <FormErrorComponent :errors="errors.email"/>

                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right" for="password">Password</label>

                            <div class="col-md-6">
                                <input :class="errors.password != undefined? 'is-invalid':''"
                                       autocomplete="current-password"
                                       class="form-control"
                                       id="password"
                                       name="password"
                                       required
                                       type="password"
                                       v-model.trim="password">

                                <FormErrorComponent :errors="errors.password"/>

                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" id="remember" name="remember" type="checkbox">

                                    <label class="form-check-label" for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button class="btn btn-primary" type="submit">
                                    Login
                                </button>
                                <router-link class="btn btn-link" to="forgot_password">Forgot your password?</router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import FormErrorComponent from "../Elements/Form/FormErrorComponent";

    export default {
        components: {
            FormErrorComponent
        },
        data() {
            return {
                password: null,
                email: null,
            }
        },
        computed: {
            ...mapGetters([
                'errors',
                'logged_in'
            ]),
        },
        methods: {
            login: function () {
                // Extract email and password from bindings //
                const {email, password} = this;

                this.$store.dispatch('login', {username: email, password: password})
                    .then(() => this.$router.push('home'))
                    .catch(() => console.log('Invalid login attempt'));
            },
        }
    }
</script>
