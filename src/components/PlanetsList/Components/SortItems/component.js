import { mapActions } from 'vuex'

export default {
  name: 'SortItems',
  props: {
    items: Array
  },
  data () {
    return {
      sortActiveItem: ''
    }
  },
  methods: {
    ...mapActions(['sortBy']),

    setSortType (key, e) {
      this.sortBy(key)
      this.sortActiveItem = e.target.value
    }
  }
}
