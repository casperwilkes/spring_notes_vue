import FlashMessage from '@smartweb/vue-flash-message';
import Vue from 'vue';

Vue.use(FlashMessage, {time: 2500, strategy: 'multiple'});
