import axios from 'axios'

const updatePage = ({ commit, dispatch, state }, payload) => {
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
}

const getItems = ({ commit, state }) => {
  const URL = 'https://swapi.dev/api/planets/?page='
  commit('IS_LOADING', true)

  axios.get(`${URL}${state.pagination.current}`)
    .then((response) => {
      commit('SET_RESOURCES', response.data.results)

      setTimeout(() => {
        commit('IS_LOADING', false)
      }, 1000)
    })
    .catch((error) => {
      console.log(error)
    })
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

export default {
  sortBy,
  getItems,
  updatePage
}
