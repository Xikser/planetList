<template>
  <section class="container">
    <h1>Lista planet:</h1>
    <PlanetsList/>
  </section>
</template>

<script>
import PlanetsList from '@/components/PlanetsList'

export default {
  name: 'Home',
  components: {
    PlanetsList
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
    font-family: 'Helvetica',sans-serif
    font-weight: 600
    text-transform: uppercase
    letter-spacing: 2.25px
</style>
