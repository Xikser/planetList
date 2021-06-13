<template>
  <div class="planet">
    <h2 class="planet__header"> Nazwa planety:
      <span>
        {{ name }}
      </span>
    </h2>
    <p class="planet__p"> Okres rotacji:
      <span>
        {{ rotation }}
      </span>
    </p>
    <p class="planet__p"> Panujący klimat:
      <span>
        {{ climate }}
      </span>
    </p>
    <p class="planet__p"> Grawitacja:
      <span>
       {{ gravity }}
      </span>
    </p>
    <p class="planet__p"> Utworzenie planety:
      <span>
       {{ created }}
      </span>
    </p>
    <p class="planet__p"> Link:
      <a class='planet__link' :href=" url " target="_blank">Sprawdź</a>
    </p>
  </div>
</template>

<script src="./component.js"/>
<style src="./style.sass" lang="sass" scoped></style>
