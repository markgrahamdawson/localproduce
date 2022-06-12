import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      activeSite: 1
    },
    mutations: {
      setActiveSite(state, siteId) {
        state.activeSite = siteId
      }
    },
    actions: {
      setActiveSite(vuexContext, siteId) {
        vuexContext.commit('setActiveSite',siteId)
      }
    }
  })
}
export default createStore
