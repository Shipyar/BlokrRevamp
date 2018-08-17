import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: 'test',
      loading: false,
      error: null,
      loadedBloks: [],
    },
    getters: {
  
    },
    mutations: {
  
    },
    actions: {
  
    }
  })
}

export default createStore;