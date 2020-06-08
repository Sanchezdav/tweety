import Vue from 'vue'
import VueCookies from 'vue-cookie'

import App from './App.vue'
import store from './store'
import router from './router'

import '@/assets/css/tailwind.scss'
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
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'
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
  faAngleDown
)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
