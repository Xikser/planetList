<template>
  <section class="container" v-if="$store.state.loading === false">
    <div class="container__content">
      <h1>Planet list:</h1>

      <SortItems :items="planets"></SortItems>
      <Filters :items="planets"/>

      <PlanetsList/>
    </div>
  </section>
  <section class="isLoading" v-else></section>
</template>

<script>
import PlanetsList from '@/components/PlanetsList'
import SortItems from '../components/PlanetsList/Components/SortItems/SortItems'
import Filters from '../components/PlanetsList/Components/Filters/Filters'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    PlanetsList,
    SortItems,
    Filters
  },
  computed: {

    ...mapState(['planets'])
  },
  mounted () {
    this.getItems()
  },
  methods: {
    ...mapActions(['getItems'])
  }
}
</script>

<style src="./style.sass" lang="sass"></style>
