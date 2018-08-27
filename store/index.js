import Vuex from 'vuex'
import Auth from '@/plugins/firebase'
import firebase from 'firebase'

function buildUserObject (authData) {
  let { email, uid } = authData.user
  let user = {}
  user['email'] = email
  user['uid'] = uid
  return user
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      loading: false,
      error: null,
      loadedBloks: [],
    },
    getters: {
      user(state) {
        return state.user;
      },
      error(state) {
        return state.error;
      },
      loading(state) {
        return state.loading;
      },
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload;
      },
      setLoading(state, payload) {
        state.loading = payload;
      },
      setError(state, payload) {
        state.error = payload;
      },
      clearError(state) {
        state.error = null;
      },
      clearUser(state) {
        state.user = null;
      },
      createBlok(state, payload) {
        state.loadedBloks.push(payload);
      },
    },
    actions: {
      async signInUser({ commit }, payload) {
        commit('setLoading', true)
        commit('clearError')
        let authData = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        commit('setUser', buildUserObject(authData))
        commit('setLoading', false)
      },
      async signUpUser({ commit }, payload) {
        commit('setLoading', true)
        commit('clearError')
        let authData = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        commit('setUser', buildUserObject(authData))
        commit('setLoading', false)
      },
      autoConnect({ commit }, payload) {
        commit('setUser', {id: payload.uid});
      }
    } 
  })
}

export default createStore;