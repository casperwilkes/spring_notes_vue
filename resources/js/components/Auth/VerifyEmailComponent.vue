<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Verify Your Email Address</div>

                <div class="card-body">
                    <div class="alert alert-success" role="alert" v-if="resent">
                        A fresh verification link has been sent to your email address.
                    </div>

                    <div class="alert alert-success" role="alert" v-if="loading">
                        <span class="lead">Loading ...</span>
                        <div class="spinner-grow" role="status" v-for="i in spinner_count">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>

                    <div class="alert alert-danger lead" role="alert" v-if="invalid">
                        Could not verify email. Please try again
                    </div>

                    <div class="alert alert-success lead" role="alert" v-if="verified">
                        Your email has been verified
                    </div>

                    <div class="p-3" v-if="!verified">
                        Before proceeding, please check your email for a verification link.
                        If you did not receive the email,
                        <button @click="send" class="btn btn-link p-0 m-0 align-baseline" type="submit">click here to request another.</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                resent: false,
                loading: true,
                spinner_count: 1,
                invalid: false,
                verified: false,
            }
        },
        computed: {
            ...mapGetters([
                'user',
            ]),
        },
        methods: {
            /**
             * Sets up loading spinners
             */
            counters: function () {
                setInterval(() => {
                    if (this.spinner_count < 3) {
                        this.spinner_count++;
                    }
                }, 1000);
            },
            /**
             * Sends a request for a fresh validation link
             */
            send: function () {
                axios.post('/email/resend')
                     .then(() => this.resent = true)
                     .catch(err => console.log(err));
            },
            /**
             * Verifies an incoming request from email
             */
            verify: function () {
                const {id, hash} = this.$route.params;

                // Check if route has id & hash //
                if (id !== undefined && hash !== undefined) {
                    // Check if user is already verified //
                    if (this.user.verified) {
                        this.invalid = false;
                        this.verified = true;
                        this.loading = false;
                    } else {
                        // User not currently verified, attempt verification //
                        axios.post(`/email/verify/${id}/${hash}`
                            , null,
                            {params: this.$route.query})
                             .then(() => {
                                 this.$store.dispatch('fetchUser');
                                 this.invalid = false
                                 this.verified = true;
                                 this.loading = false;
                             })
                             .catch(() => {
                                 this.invalid = true
                                 this.loading = false;
                             });
                    }
                } else {
                    this.loading = false;
                }
            }
        },
        mounted() {
            // Setup spinners //
            this.counters();
            // Attempt to verify if matching request //
            this.verify();
        }
    }
</script>
