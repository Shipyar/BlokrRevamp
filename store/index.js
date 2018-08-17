import Vuex from 'vuex'
import firebase from 'firebase'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: 'test',
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
      signInUser({ commit }, payload) {
        commit('setLoading', true);
        commit('clearError');
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then((user) => {
            commit('setLoading', false);
            const newUser = {
              id: user.uid,
              bloks: [],
            };
            commit('setUser', newUser);
          }).catch((e) => {
            commit('setLoading', false);
            commit('setError', e);
          });
      },
    }
  })
}

export default createStore;