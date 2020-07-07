export default {
    methods: {
        /**
         * Global logout method
         */
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => this.$router.push('login'));
        }
    }
}
