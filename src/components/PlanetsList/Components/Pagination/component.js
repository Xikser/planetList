export default {
  name: 'Pagination',
  props: {
    pages: Number,
    current: Number,
    prevButtonStatus: Boolean,
    nextButtonStatus: Boolean
  },
  data () {
    return {
      activeItem: 1
    }
  },
  methods: {
    handlePaginationClick (index) {
      const pageNumber = index
      this.activeItem = index
      this.$emit('paginationClick', pageNumber)
    },
    nextPage () {
      this.handlePaginationClick(this.current + 1)
      this.$emit('paginationClick', this.current + 1)
    },
    prevPage () {
      this.handlePaginationClick(this.current - 1)
      this.$emit('paginationClick', this.current - 1)
    }
  }
}
