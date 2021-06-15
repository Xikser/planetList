<template>
  <main class="app">
    <router-view/>

    <Pagination
      :current="page.current"
      :pages="page.pages"
      @paginationClick="updateCurrentPage( {$event} )"
      :prevButtonStatus="page.prevButtonStatus"
      :nextButtonStatus="page.nextButtonStatus"
    />
  </main>
</template>

<script>
import 'aos/dist/aos.css'
import AOS from 'aos'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  components: {
    Pagination: () => import('./components/PlanetsList/Components/Pagination/Pagination')
  },
  mounted () {
    AOS.init()
  },
  computed: {
    page () {
      return this.pagination
    },

    ...mapState(['pagination'])
  },
  methods: {
    ...mapActions(['updatePage']),
    ...mapMutations(['UPDATE_PAGE']),
    updateCurrentPage (value) {
      this.updatePage({ value })
    }
  }
}
</script>

<style lang="sass">
.isLoading
  position: relative
  width: 100vw
  height: 100vh
  transition: all .3s ease

  &::before
    position: absolute
    content: ''
    width: 100%
    height: 100%
    top: 0
    left: 0
    background: #181819
    z-index: 100
    transition: all .5s ease

  &::after
    position: absolute
    content: 'Loading...'
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    text-transform: uppercase
    font-size: 5rem
    letter-spacing: 5px
    font-family: $font--default
    color: $color--text--accent
    z-index: 101

html
  font-size: 10px
  scroll-behavior: smooth

*, *::before, *::after
  box-sizing: border-box

body
  background: $color--background
  overflow-x: hidden
  width: 100vw
  font-family: Avenir, Helvetica, Arial, sans-serif
  color: white

a
  text-decoration: none
  color: white

ol, ul, li
  list-style: none

button
  position: relative
  padding: 0
  margin: 0
  color: white
  outline: none
  background: transparent
  border: 0

input
  background: transparent
  border: 0
  outline: 0
  color: white

input[type=submit]
  cursor: pointer
</style>
