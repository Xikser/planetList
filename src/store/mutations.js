const SORT_ITEMS_BY_LETTERS = (state) => {
  state.filteredPlanets.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    } else if (b.name > a.name) {
      return -1
    }
    return 0
  })
}

const SORT_ITEMS_BY_ROTATION = (state) => {
  state.filteredPlanets.sort((a, b) => {
    return a.rotation - b.rotation
  })
}

const DISABLE_PREV_BUTTON = (state, payload) => {
  state.pagination.prevButtonStatus = payload
}

const DISABLE_NEXT_BUTTON = (state, payload) => {
  state.pagination.nextButtonStatus = payload
}

const SET_RESOURCES = (state, payload) => {
  const uniqueClimates = new Set()

  state.planets = payload.map((planet) => {
    const climates = planet.climate.split(', ')

    climates.forEach(climate => uniqueClimates.add(climate))

    return {
      name: planet.name,
      rotation: planet.rotation_period,
      climates: climates,
      gravity: planet.gravity,
      created: planet.created,
      url: planet.url
    }
  })

  state.filteredPlanets = state.planets
  state.climates = uniqueClimates
}

const UPDATE_PAGE = (state, payload) => {
  state.pagination.current = payload.value.$event
}

const IS_LOADING = (state, payload) => {
  state.loading = payload
}

const FILTER_ITEMS_BY_CLIMATE_TYPE = (state, payload) => {
  if (payload === 'All') {
    state.filteredPlanets = state.planets
  } else {
    state.filteredPlanets = state.planets.filter(planet => planet.climates.includes(payload))
  }
}

export default {
  SORT_ITEMS_BY_LETTERS,
  SORT_ITEMS_BY_ROTATION,
  DISABLE_PREV_BUTTON,
  DISABLE_NEXT_BUTTON,
  SET_RESOURCES,
  UPDATE_PAGE,
  IS_LOADING,
  FILTER_ITEMS_BY_CLIMATE_TYPE
}
