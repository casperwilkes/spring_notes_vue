import {library} from '@fortawesome/fontawesome-svg-core';
import {faCopy, faEdit, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {faFolder, faFolderMinus, faFolderPlus, faPlusCircle, faPlusSquare, faSearch, faStream} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Vue from 'vue';

library.add(
    faEdit,
    faTrashAlt,
    faFolderPlus,
    faFolderMinus,
    faStream,
    faFolder,
    faSearch,
    faCopy,
    faPlusCircle,
    faPlusSquare
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
