import Vue from 'vue';
import router from '../plugins/router';
import store from '../store/store';

// Add response interceptor //
window.axios.interceptors.response.use(response => response, error => {
    const status = error.response.status;

    // Check for unauthenticated error //
    if (status === 401) {
        // Run store logout //
        store.dispatch('logout')
             .then(() => {
                 // Add user message //
                 Vue.prototype.flashMessage.warning({message: 'You have been logged out'});
                 // Redirect //
                 router.push({name: 'login'});
             })
             .catch(err => console.log(err));
    }

    return Promise.reject(error);
});
