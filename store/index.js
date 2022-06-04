import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      activeSite: 100000
    },
    mutations: {
      setActiveSite(state, siteName) {
        state.activeSite = siteName
      }
    },
    actions: {
      setActiveSite(vuexContext, siteName) {
        vuexContext.commit('setActiveSite',siteName)
      }
    }
  })
}
export default createStore
