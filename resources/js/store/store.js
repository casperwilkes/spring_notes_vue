import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const debug = true;

const modules = {};

const state = {
    /**
     * Main state of user object
     */
    user: {},
    /**
     * Main state of errors
     */
    errors: {}
};

const mutations = {
    /**
     * Sets the error state
     * @param state
     * @param payload
     * @constructor
     */
    "SET_ERRORS": (state, payload) => {
        state.errors = payload;
    },
    /**
     * Sets the user state
     * @param state
     * @param payload
     * @constructor
     */
    "SET_USER": (state, payload) => {
        state.user = payload;
    }
};

const actions = {
    /**
     * Fetches a current csrf cookie for talking with api
     */
    getCookie() {
        axios.get('sanctum/csrf-cookie')
             .then(() => console.log('csrf obtained'))
             .catch(() => console.log('csrf not obtained'));
    },
    /**
     * Logs a user in and returns a promise
     * @param commit
     * @param dispatch
     * @param user
     * @return {Promise<unknown>}
     */
    login({commit, dispatch}, user) {
        return new Promise((resolve, reject) => {
            let {username, password} = user;

            dispatch('getCookie');

            // Attempt login //
            axios.post(`/login`, {email: username, password: password})
                 .then(res => {
                     dispatch('fetchUser');
                     commit('SET_ERRORS', {});
                     resolve(true);

                 })
                 .catch(err => {
                     console.log(err);
                     commit("SET_ERRORS", err.response.data.errors);
                     reject(true);
                 });
        });
    },
    /**
     * Registers a new user
     * @param commit
     * @param dispatch
     * @param user
     * @return {Promise<unknown>}
     */
    register({commit, dispatch}, user) {
        return new Promise((resolve, reject) => {
            dispatch('getCookie');

            axios.post('/register', user)
                 .then(() => {
                     commit('SET_ERRORS', {});
                     dispatch('fetchUser');
                     resolve(true);
                 })
                 .catch(err => {
                     commit('SET_ERRORS', err.response.data.errors);
                     reject(true);
                 });
        });
    },
    /**
     * Fetches current authenticated user from the api
     * @param commit
     */
    fetchUser({commit}) {
        axios.get('/api/v1/user')
             .then(res => commit('SET_USER', res.data))
             .catch(err => console.log(err));
    },
    /**
     * Logs a user out of the system
     * @param commit
     * @param dispatch
     * @return {Promise<unknown>}
     */
    logout({commit, dispatch}) {
        dispatch('getCookie');

        return new Promise((resolve, reject) => {
            axios.post('/logout')
                 .then(res => {
                     commit('SET_USER', {});
                     resolve(true);
                 })
                 .catch(() => reject(true));
        });
    }
};

const getters = {
    /**
     * Gets current errors object
     * @param state
     * @return {array|null}
     */
    errors: state => state.errors,
    /**
     * Gets authenticated status
     * @param state
     * @return {boolean}
     */
    logged_in: state => Object.keys(state.user).length > 0,
    /**
     * Gets current user
     * @param state
     * @return {{}}
     */
    user: state => state.user,

    /**
     * Checks if current user is set and verified
     * @param state
     * @return {boolean}
     */
    verified: state => state.user != null && state.user.verified,
};

/**
 * Plugin to persist data between refreshes
 * @type {(store: any) => void}
 */
const persist = createPersistedState({
    // Vuex local storage name //
    key: 'spring'
});

export default new Vuex.Store({
    strict: debug,
    modules,
    state,
    getters,
    actions,
    mutations,
    plugins: [persist]
});
