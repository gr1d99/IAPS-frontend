import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

library.add(faPlus);

Vue.component('font-awesome-icon', FontAwesomeIcon);
