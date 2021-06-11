// @vue/component
import PlanetItem from './Components/Planets/PlanetItem'

export default {
  name: 'PlanetsList',
  components: {
    PlanetItem
  },
  props: {
    planets: {
      type: Array
    }
  }
}
