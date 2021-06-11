<template>
  <div class="home">
    <PlanetsList />
  </div>
</template>

<script>
import PlanetsList from '@/components/PlanetsList'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
    PlanetsList
  },
  data () {
    return {}
  }
}
</script>
