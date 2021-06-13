import { mapActions } from 'vuex'

export default {
  name: 'SortItems',
  props: {
    items: Array
  },
  methods: {
    ...mapActions(['sortBy']),

    setSortType (key) {
      this.sortBy(key)
    }
  }
}
