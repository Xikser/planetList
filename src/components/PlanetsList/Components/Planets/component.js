export default {
  props: {
    name: {
      type: String,
      required: true
    },
    rotation: {
      type: String,
      required: true
    },
    climates: {
      type: Array,
      required: true
    },
    gravity: {
      type: String,
      required: true
    },
    created: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
