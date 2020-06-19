import Vue from 'vue'
import VueCookies from 'vue-cookie'
import VueSweetalert2 from 'vue-sweetalert2'

import App from './App.vue'
import store from './store'
import router from './router'

import '@/assets/css/tailwind.scss'
import 'sweetalert2'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faCog,
  faUser,
  faStar,
  faImage,
  faAngleDown,
  faComment,
  faShare,
  faHeart,
  faEdit,
  faTrash,
  faArrowLeft,
  faSmile,
  faClock,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faCog,
  faUser,
  faStar,
  faImage,
  faAngleDown,
  faComment,
  faShare,
  faHeart,
  faEdit,
  faTrash,
  faArrowLeft,
  faSmile,
  faClock,
  faThumbsUp,
  faThumbsDown,
)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueCookies)
Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
