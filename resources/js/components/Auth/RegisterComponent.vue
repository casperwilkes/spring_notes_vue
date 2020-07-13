<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>

                <div class="card-body">
                    <form @submit.prevent="register">
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right" for="name">Name</label>

                            <div class="col-md-6">
                                <input :class="errors.name !== undefined ? 'is-invalid':''"
                                       autocomplete="name"
                                       autofocus
                                       class="form-control"
                                       id="name"
                                       name="name"
                                       required
                                       type="text"
                                       v-model.trim="name"
                                       value="">

                                <FormErrorComponent :errors="errors.name"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right" for="email">E-Mail Address</label>

                            <div class="col-md-6">
                                <input :class="errors.email !== undefined ? 'is-invalid':''"
                                       autocomplete="email"
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
                                <input :class="errors.password !== undefined ? 'is-invalid':''"
                                       autocomplete="new-password"
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
                            <label class="col-md-4 col-form-label text-md-right" for="password-confirm">Confirm Password</label>

                            <div class="col-md-6">
                                <input :class="errors.password_confirmation !== undefined ? 'is-invalid':''"
                                       autocomplete="new-password"
                                       class="form-control"
                                       id="password-confirm"
                                       name="password_confirmation"
                                       required
                                       type="password"
                                       v-model.trim="password_confirmation">

                                <FormErrorComponent :errors="errors.password_confirmation"/>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button class="btn btn-primary" type="submit">Register</button>
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
        components: {FormErrorComponent},
        data() {
            return {
                message: '',
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            };
        },
        computed: {
            ...mapGetters([
                'errors',
                'logged_in'
            ]),
        },
        methods: {
            register: function () {
                const {name, email, password, password_confirmation} = this;

                this.$store.dispatch('register', {
                    name, email, password, password_confirmation
                })
                    .then(() => {
                        this.flashMessage.success({message: 'You have been successfully registered'});
                        this.$router.push({name: 'home'});
                    })
                    .catch(err => {
                        this.flashMessage.error({message: 'Could not complete registration at this time'});
                        console.log(err)
                    });
            }
        }
    }
</script>
