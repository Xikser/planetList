<template>
  <div>
    <p>{{ planetName }}</p>
    <p>{{ planetRotation }}</p>
    <p>{{ planetClimate }}</p>
    <p>{{ planetGravity }}</p>
    <p>{{ planetCreated }}</p>
    <p>{{ planetUrl }}</p>
  </div>
</template>

<script>
export default {
  props: {
    planetName: {
      type: String,
      required: true
    },
    planetRotation: {
      type: String,
      required: true
    },
    planetClimate: {
      type: String,
      required: true
    },
    planetGravity: {
      type: String,
      required: true
    },
    planetCreated: {
      type: String,
      required: true
    },
    planetUrl: {
      type: String,
      required: true
    }
  }
}
</script>
