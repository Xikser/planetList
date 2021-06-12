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

    <PlanetsList :planets="planets" :loading="loading"/>

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

    ...mapState(['pagination', 'planets', 'loading'])
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

<style src="./style.sass" lang="sass"></style>
