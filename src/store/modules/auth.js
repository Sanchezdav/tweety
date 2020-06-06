import VueCookies from 'vue-cookie'
import { pick } from 'lodash'
import api from '@/api'

export const state = {
  user: null,
  auth: {}
}

export const getters = {
  isAuthenticated: state => !!state.user,
  user: state => state.user,
  auth: state => state.auth
}

export const actions = {
  signUp({ commit }, { username, email, password }) {
    return new Promise((resolve, reject) => {
      api
        .createUser(username, email, password)
        .then((response) => {
          console.log(response)
          const authHeaders = pick(response.headers, [
            'access-token',
            'client',
            'expiry',
            'uid',
            'token-type',
          ])
          commit('setAuth', authHeaders)
          commit('setUser', response.data.data)

          const cookies = {
            tokens: authHeaders,
            user: response.data.data,
          }

          VueCookies.set('session', JSON.stringify(cookies), {
            expires: '14D',
          })

          resolve()
        })
        .catch((error) => {
          console.log(error)
          commit('setUser', null)
          reject(error.response.data.errors)
        })
    })
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setAuth(state, auth) {
    state.auth = auth
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
