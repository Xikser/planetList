import { mapActions } from 'vuex'

export default {
  name: 'Filters',
  props: {
    items: Array
  },
  data () {
    return {
      activeIndex: null
    }
  },
  methods: {
    ...mapActions(['filterPlanetsByClimateType']),

    filter (element, index) {
      this.filterPlanetsByClimateType(element.target.value)
      this.activeIndex = index
    }
  }
}
