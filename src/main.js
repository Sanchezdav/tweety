import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes'
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
  faKiwiBird,
  faStar,
  faImage
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
  faKiwiBird,
  faStar,
  faImage
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
