import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pagination: {
      prev: Number,
      next: Number,
      current: 1,
      pages: 6,

      prevButtonStatus: false,
      nextButtonStatus: false
    },

    planets: []
  },
  mutations: {
    DISABLE_PREV_BUTTON (state, payload) {
      state.pagination.prevButtonStatus = payload
    },
    DISABLE_NEXT_BUTTON (state, payload) {
      state.pagination.nextButtonStatus = payload
    },
    SET_RESOURCES (state, payload) {
      state.planets = payload
    },
    UPDATE_PAGE (state, payload) {
      state.pagination.current = payload.value.$event
    }
  },
  actions: {
    updatePage ({ commit, dispatch }, payload) {
      if (payload.value.$event === 1) {
        commit('DISABLE_PREV_BUTTON', true)
      } else if (payload.value.$event === 6) {
        commit('DISABLE_NEXT_BUTTON', true)
      } else {
        commit('DISABLE_PREV_BUTTON', false)
        commit('DISABLE_NEXT_BUTTON', false)
      }
      commit('UPDATE_PAGE', payload)
      dispatch('getItems')
    },

    getItems ({ commit, state }) {
      const URL = 'https://swapi.dev/api/planets/?page='

      axios.get(`${URL}${state.pagination.current}`)
        .then((response) => {
          this.prev = state.pagination.current - 1
          this.next = state.pagination.current + 1
          commit('SET_RESOURCES', response.data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  modules: {}
})
