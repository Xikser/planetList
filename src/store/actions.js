import axios from 'axios'

const updatePage = ({ commit, dispatch, state }, payload) => {
  commit('UPDATE_PAGE', payload)
  dispatch('getItems')

  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 0)
}

const getItems = ({ commit, state, dispatch }) => {
  const URL = 'https://swapi.dev/api/planets/?page='
  commit('IS_LOADING', true)
  dispatch('checkLoadingStatus')

  axios.get(`${URL}${state.pagination.current}`)
    .then((response) => {
      commit('SET_RESOURCES', response.data)

      dispatch('checkPrevNextValue')

      setTimeout(() => {
        commit('IS_LOADING', false)
      }, 1000)
    })
    .catch((error) => {
      console.log(error)
    })
}

const checkLoadingStatus = ({ state, commit }) => {
  if (state.loading === true) {
    commit('DISABLE_PREV_BUTTON', true)
    commit('DISABLE_NEXT_BUTTON', true)
  } else {
    commit('DISABLE_PREV_BUTTON', false)
    commit('DISABLE_NEXT_BUTTON', false)
  }
}

const checkPrevNextValue = ({ state, commit }) => {
  if (state.pagination.prev === null || state.pagination.prev === '') {
    commit('DISABLE_PREV_BUTTON', true)
  } else {
    commit('DISABLE_PREV_BUTTON', false)
  }

  if (state.pagination.next === null || state.pagination.next === '') {
    commit('DISABLE_NEXT_BUTTON', true)
  } else {
    commit('DISABLE_NEXT_BUTTON', false)
  }
}

const sortBy = ({ state, commit, dispatch }, payload) => {
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

const filterPlanetsByClimateType = ({ state, commit }, payload) => {
  commit('FILTER_ITEMS_BY_CLIMATE_TYPE', payload)
}

export default {
  sortBy,
  getItems,
  updatePage,
  filterPlanetsByClimateType,
  checkPrevNextValue,
  checkLoadingStatus
}
