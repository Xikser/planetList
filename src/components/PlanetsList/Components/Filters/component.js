// import { mapGetters } from 'vuex'

import { mapActions } from 'vuex'

export default {
  name: 'Filters',
  props: {
    items: Array
  },
  methods: {
    ...mapActions(['filterItems']),

    setFilter (key) {
      console.log(key)
      this.filterItems(key)
    }
  }
}
