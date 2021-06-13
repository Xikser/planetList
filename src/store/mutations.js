const SORT_ITEMS_BY_LETTERS = (state) => {
  state.planets.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    } else if (b.name > a.name) {
      return -1
    }
    return 0
  })
}
const SORT_ITEMS_BY_ROTATION = (state) => {
  state.planets.sort((a, b) => {
    return a.rotation_period - b.rotation_period
  })
}
const DISABLE_PREV_BUTTON = (state, payload) => {
  state.pagination.prevButtonStatus = payload
}

const DISABLE_NEXT_BUTTON = (state, payload) => {
  state.pagination.nextButtonStatus = payload
}

const SET_RESOURCES = (state, payload) => {
  state.planets = payload
}

const UPDATE_PAGE = (state, payload) => {
  state.pagination.current = payload.value.$event
}

const IS_LOADING = (state, payload) => {
  state.loading = payload
}

export default {
  SORT_ITEMS_BY_LETTERS,
  SORT_ITEMS_BY_ROTATION,
  DISABLE_PREV_BUTTON,
  DISABLE_NEXT_BUTTON,
  SET_RESOURCES,
  UPDATE_PAGE,
  IS_LOADING
}
