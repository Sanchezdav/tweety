import Vue from 'vue'
import axios from 'axios'
import VueCookies from 'vue-cookie'
import status from 'http-status'
import { pick } from 'lodash'

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
  faStar,
  faImage
)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueCookies)

// It gives you easy global access to it instead use import
Vue.prototype.$http = axios.create()

Vue.prototype.$http.interceptors.response.use(
  (response) => {
    if (response.headers['access-token']) {
      // Commits the relevant headers to the store, calling mutation `setAuth`.
      const authHeaders = pick(response.headers, [
        'access-token',
        'client',
        'expiry',
        'uid',
        'token-type',
      ])
      store.commit('setAuth', authHeaders)

      var session = VueCookies.get(
        'session'
      )

      // Stores the tokens in a cookie called `session` too. Cookie values are strings, so have to
      // serialize it to JSON.
      //
      // The object we are storing in session looks like this:
      // {'tokens': {'access-token': 'foo', ...}, 'user': {'email': 'foo@bar.com', ...}}
      // so that is why we are extracting and modifying, so that the `user` key isn't blown away.
      if (session) {
        session = JSON.parse(session)
        session['tokens'] = authHeaders

        VueCookies.set(
          'session',
          JSON.stringify(session),
          { expires: '14D' }
        )
      }
    }

    return response
  },
  (error) => {
    // This second fat arrow function defines a callback invoked after any FAILED request.
    // This handles every case when the server responds with a 403 / unauthorized. That means
    // we need to redirect the user to the SignIn component.
    if (
      router.currentRoute.name !== 'signin' &&
      error.response.status === status.UNAUTHORIZED
    ) {
      store.commit('setUser', null)
      router.push({ name: 'signin' })
    }

    return Promise.reject(error)
  }
)

Vue.prototype.$http.interceptors.request.use((config) => {
  const headers = store.getters.auth

  // object that holds configuration of the request that's about to be made
  config.headers = headers
  return config
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
