import {library} from '@fortawesome/fontawesome-svg-core';
// import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {faEdit, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Vue from 'vue';

library.add(faEdit, faTrashAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);
