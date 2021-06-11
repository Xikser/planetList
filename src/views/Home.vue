<template>
  <section class="container">

    <Pagination
      :current="pagination.current"
      :pages="pagination.pages"
      :prevButtonStatus="prevDisabled"
      :nextButtonStatus="nextDisabled"
      @currentPage="handleCurrentPage"
      @paginationClick="handleCurrentPage"
    />

    <h1>Lista planet:</h1>

    <PlanetsList :planets="planets"/>

  </section>
</template>

<script>
import PlanetsList from '@/components/PlanetsList'
import axios from 'axios'

const URL = 'https://swapi.dev/api/planets/?page='

export default {
  name: 'Home',
  components: {
    PlanetsList,
    Pagination: () => import('../components/PlanetsList/Components/Pagination/Pagination')
  },
  data () {
    return {
      pagination: {
        prev: '',
        next: '',
        current: 1,
        pages: 6
      },
      prevDisabled: false,
      nextDisabled: false,
      planets: []
    }
  },
  mounted () {
    this.getItems()
  },
  methods: {
    async getItems () {
      await axios.get(`${URL}${this.pagination.current}`)
        .then((response) => {
          this.prev = response.data.previous
          this.next = response.data.next
          this.planets = response.data.results
        })
        .catch((error) => {
          console.log(error)
        })
    },

    handleCurrentPage (argument) {
      if (argument === 'next') {
        // next page
        this.pagination.current++
        this.getItems()
      } else if (argument === 'prev') {
        // previous page
        this.pagination.current--
        this.getItems()
      } else {
        // page id
        this.pagination.current = argument
        this.getItems()
      }

      if (this.pagination.current === 1) {
        this.pagination.current = 1
        this.prevDisabled = true
      } else {
        this.prevDisabled = false
      }

      if (this.pagination.current === 6) {
        this.pagination.current = 6
        this.nextDisabled = true
      } else {
        this.nextDisabled = false
      }
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
