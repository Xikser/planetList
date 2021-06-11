// @vue/component
import PlanetItem from './Components/Planets/PlanetItem'
import axios from 'axios'

const URL = 'https://swapi.dev/api/planets'

export default {
  name: 'PlanetsList',
  components: {
    PlanetItem
  },
  data () {
    return {
      planets: []
    }
  },
  mounted () {
    this.getItems()
  },
  methods: {
    getItems () {
      axios.get(`${URL}`)
        .then((response) => {
          this.planets = response.data.results
          console.log(this.planets)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
