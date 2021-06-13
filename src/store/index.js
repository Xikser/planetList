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
    loading: false,
    planets: [],

    sortType: 'default'
  },
  getters: {
    planets: state => state.planets
  },
  mutations: {
    SORT_ITEMS_BY_LETTERS () {
      this.state.planets.sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else if (b.name > a.name) {
          return -1
        }
        return 0
      })
    },
    SORT_ITEMS_BY_ROTATION () {
      this.state.planets.sort((a, b) => {
        return a.rotation_period - b.rotation_period
      })
    },
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
    },
    IS_LOADING (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    updatePage ({
      commit,
      dispatch,
      state
    }, payload) {
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

    getItems ({
      commit,
      state
    }) {
      const URL = 'https://swapi.dev/api/planets/?page='
      commit('IS_LOADING', true)
      axios.get(`${URL}${state.pagination.current}`)
        .then((response) => {
          this.prev = state.pagination.current - 1
          this.next = state.pagination.current + 1
          commit('SET_RESOURCES', response.data.results)

          setTimeout(() => {
            commit('IS_LOADING', false)
          }, 1000)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    sortBy ({
      state,
      commit,
      dispatch
    }, payload) {
      if (payload === 'letter') {
        commit('IS_LOADING', true)
        commit('SORT_ITEMS_BY_LETTERS')
        state.pagination.current = 1

        setTimeout(() => {
          commit('IS_LOADING', false)
        }, 500)
      } else if (payload === 'rotation') {
        commit('IS_LOADING', true)
        commit('SORT_ITEMS_BY_ROTATION')
        state.pagination.current = 1

        setTimeout(() => {
          commit('IS_LOADING', false)
        }, 500)
      } else {
        dispatch('getItems')
      }
    }
  },
  modules: {}
})
