<template>
  <div class="planet">
    <h2 class="planet__header"> Nazwa planety:
      <span>
        {{ planetName }}
      </span>
    </h2>
    <p class="planet__p"> Okres rotacji:
      <span>
        {{ planetRotation }}
      </span>
    </p>
    <p class="planet__p"> Panujący klimat:
      <span>
        {{ planetClimate }}
      </span>
    </p>
    <p class="planet__p"> Grawitacja:
      <span>
       {{ planetGravity }}
      </span>
    </p>
    <p class="planet__p"> Utworzenie planety:
      <span>
       {{ planetCreated }}
      </span>
    </p>
    <p class="planet__p"> Link:
      <span>
        {{ planetUrl }}
      </span>
    </p>
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

<!--<script src="component.js"/>-->
