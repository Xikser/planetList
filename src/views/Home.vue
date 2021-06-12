<template>
  <section class="container">

    <Pagination
      :current="page.current"
      :pages="page.pages"
      @paginationClick="updateCurrentPage( {$event} )"
      :prevButtonStatus="page.prevButtonStatus"
      :nextButtonStatus="page.nextButtonStatus"
    />

    <h1>Lista planet:</h1>

    <PlanetsList :planets="planets"/>

  </section>
</template>

<script>
import PlanetsList from '@/components/PlanetsList'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    PlanetsList,
    Pagination: () => import('../components/PlanetsList/Components/Pagination/Pagination')
  },
  computed: {
    page () {
      return this.pagination
    },

    ...mapState(['pagination', 'planets'])
  },
  mounted () {
    this.getItems()
  },
  methods: {
    ...mapActions(['getItems', 'updatePage']),
    ...mapMutations(['UPDATE_PAGE']),

    updateCurrentPage (value) {
      this.updatePage({ value })
    }
  }
}
</script>

<style lang="sass">
.container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  h1
    font-size: 3.5rem
    font-family: 'Helvetica', sans-serif
    font-weight: 600
    text-transform: uppercase
    letter-spacing: 2.25px
</style>
