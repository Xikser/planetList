export default {
  name: 'Pagination',
  props: {
    pages: Number,
    current: Number,
    prevButtonStatus: Boolean,
    nextButtonStatus: Boolean
  },
  methods: {
    handlePaginationClick (e) {
      const element = e.target
      const elementTextContent = element.textContent
      const pageNumber = parseInt(elementTextContent, 10)

      element.classList.add('isActive')
      this.$emit('paginationClick', pageNumber)
    },
    nextPage () {
      this.$emit('currentPage', 'next')
    },
    prevPage () {
      this.$emit('currentPage', 'prev')
    }
  }
}
