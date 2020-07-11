import {library} from '@fortawesome/fontawesome-svg-core';
import {faEdit, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {faFolder, faFolderMinus, faFolderPlus, faStream} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Vue from 'vue';

library.add(faEdit, faTrashAlt, faFolderPlus, faFolderMinus, faStream, faFolder);

Vue.component('font-awesome-icon', FontAwesomeIcon);
