export default {
    data() {
        return {
            /**
             * Currently at bottom of page
             *  Note: Infinite scrolling
             */
            page_bottom: false
        }
    },
    methods: {
        /**
         * Global logout method
         */
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => this.$router.push({name: 'login'}));
        },
        /**
         * Global method for checking end of page
         *  Note: for infinite pagination
         */
        scroll() {
            window.onscroll = () => {
                this.page_bottom = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight
                                   === document.documentElement.offsetHeight;
            }
        }
    }
}
