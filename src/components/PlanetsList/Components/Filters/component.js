import { mapActions } from 'vuex'

export default {
  name: 'Filters',
  props: {
    items: Array
  },
  methods: {
    ...mapActions(['filterPlanetsByClimateType']),

    filter (element) {
      this.filterPlanetsByClimateType(element.target.value)
    }
  }
}
