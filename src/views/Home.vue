<template>
  <section class="container">
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
