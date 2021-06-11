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
      <a class='planet__link' :href=" planetUrl " target="_blank">Sprawdź</a>
    </p>
  </div>
</template>

<script src="./component.js"/>
<style src="./style.sass" lang="sass" scoped></style>
