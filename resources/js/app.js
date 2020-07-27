/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import mixins from './includes/mixins';
import router from "./plugins/router";
import store from "./store/store";

require('./bootstrap');
require('./plugins/flash');
require('./plugins/moment');
require('./plugins/fontAwesome');
require('./plugins/axios');
require('./plugins/fragment');

// Init Vue //
window.Vue = require('vue');
window.Vue.mixin(mixins);
window.Vue.prototype.log = console.log;
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('navigation-component', require('./components/Elements/NavigationComponent').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store
});
