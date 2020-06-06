import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

import MainContent from '@/components/MainContent'
import Home from '@/views/Home'
import Explore from '@/views/Explore'
import Notifications from '@/views/Notifications'
import Messages from '@/views/Messages'
import Bookmarks from '@/views/Bookmarks'
import Profile from '@/views/Profile'
import Settings from '@/views/Settings'
import Signin from '@/views/Signin'
import Signup from '@/views/Signup'
import NotFound from '@/views/NotFound'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: MainContent,
    beforeEnter: requireAuth,
    children: [
      { path: '', component: Home, name: 'home' },
      { path: '/explore', component: Explore },
      { path: '/notifications', component: Notifications },
      { path: '/messages', component: Messages },
      { path: '/bookmarks', component: Bookmarks },
      { path: '/profile', component: Profile },
      { path: '/settings', component: Settings },
    ],
  },
  {
    path: '/sign_in',
    component: Signin,
    beforeEnter: redirectIfAuth,
    name: 'signin'
  },
  {
    path: '/sign_up',
    component: Signup,
    beforeEnter: redirectIfAuth
  },
  { path: '*', component: NotFound },
]

function requireAuth(to, from, next) {
  if (store.getters.isAuthenticated) {
    next()
  } else {
    next({
      name: 'signin',
      query: { redirect: to.fullPath },
    })
  }
}

function redirectIfAuth(to, from, next) {
  if (store.getters.isAuthenticated) {
    next({
      name: 'home'
    })
  } else {
    next()
  }
}

export default new Router({
  mode: "history",
  routes
})
