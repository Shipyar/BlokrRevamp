import Vuex from 'vuex'

import user from '@/store/user';


const createStore = () => {
  return new Vuex.Store({
    state: {
      loading: false,
      error: null,
      loadedBloks: [],
    },
    modules: {
      user
    },
    getters: {
      error(state) {
        return state.error;
      },
      loading(state) {
        return state.loading;
      },
    },
    mutations: {
      setLoading(state, payload) {
        state.loading = payload;
      },
      setError(state, payload) {
        state.error = payload;
      },
      clearError(state) {
        state.error = null;
      },
      createBlok(state, payload) {
        state.loadedBloks.push(payload);
      },
    },
    actions: {
    } 
  })
}

export default createStore;