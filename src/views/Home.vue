<template>
  <section class="container">

    <h1>Lista planet:</h1>

    <Filters :items="planets"></Filters>

    <PlanetsList :planets="planets" :loading="loading"/>

    <Pagination
      :current="page.current"
      :pages="page.pages"
      @paginationClick="updateCurrentPage( {$event} )"
      :prevButtonStatus="page.prevButtonStatus"
      :nextButtonStatus="page.nextButtonStatus"
    />
  </section>
</template>

<script>
import PlanetsList from '@/components/PlanetsList'
import Filters from '../components/PlanetsList/Components/Filters/Filters'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    PlanetsList,
    Filters,
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
    },

    fetchData () {
      this.getItems()
    }
  }
}
</script>

<style src="./style.sass" lang="sass"></style>
