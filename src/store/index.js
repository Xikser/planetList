import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pagination: {
      prev: '',
      next: '',
      current: 1,
      pages: 6,

      prevButtonStatus: false,
      nextButtonStatus: false
    },
    loading: false,
    climates: new Set(),
    planets: [],
    filteredPlanets: [],
    sortType: 'default'
  },
  getters,
  mutations,
  actions,
  modules
})
