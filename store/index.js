import Vuex from 'vuex'

import user from '@/store/user';


const createStore = () => {
  return new Vuex.Store({
    state: {
      error: null,
      loadedBloks: [],
      loading: false
    },
    modules: {
      user
    },
    getters: {
      error(state) {
        return state.error;
      },
      loading: ({loading}) => loading
    },
    mutations: {
      setError(state, payload) {
        state.error = payload;
      },
      clearError(state) {
        state.error = null;
      },
      createBlok(state, payload) {
        state.loadedBloks.push(payload);
      },
      setLoading(state, payload) {
        state.loading = payload;
      },
    }
  })
}

export default createStore;