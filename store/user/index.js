import { auth } from '@/plugins/firebase'

import { SET_PROFILE, LOGOUT } from './mutations'

const state = {
  profile: {},
  loggedIn: false
};

const getters = {
  profile: ({profile}) => profile,
  loggedIn: ({loggedIn}) => loggedIn
};

const mutations = {
  [SET_PROFILE](state, profile) {
    state.loggedIn = true;
    state.profile = {
      name: profile.displayName,
    };
  },

  [LOGOUT](state) {
    state.loggedIn = false;
    state.profile = {}
  }
}

const actions = {
  // * User login 
  async login(store, payload) {
    // * Async checks if user is already logged in
    if (store.state.loggedIn)
      return;
    try {
      // * Calls the firebase auth with its payload
      const result = await auth.signInWithEmailAndPassword(payload.email, payload.password)
      console.log(result)
    } catch(e) {
      console.error(e);
    }
  },

  async signUp(store, payload) {
    if (store.state.loggedIn)
      return;
      try {
        await auth.createUserWithEmailAndPassword(payload.email, payload.password)
      } catch(e) {
        console.error(e);
      }
  },

  async logout(store) {
    if (!store.state.loggedIn) {
      return;
    }
    try {
      await auth.signOut();
      console.log('logged out');
    } catch(e) {
      console.log(e);
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};