<template>
  <div class="planet">
    <div class="planet__header">
      <h2>Name:
        <span>
          {{ name }}
        </span>
      </h2>

      <p class="planet__p"> Created:
        <span>
         {{ created }}
        </span>
      </p>
    </div>

    <div class="planet__content">
      <div class="planet__info">
        <p class="planet__p"> Rotation period:
          <span>
          {{ rotation }}
        </span>
        </p>
      </div>

      <div class="planet__info">
        <p class="planet__p"> Climate:
          <span>
            {{ climates.reduce((s1, s2) => s1 + ', ' + s2) }}
          </span>
        </p>
      </div>

      <div class="planet__info">
        <p class="planet__p"> Gravity:
          <span>
           {{ gravity }}
          </span>
        </p>
      </div>

      <div class="planet__info">
        <p class="planet__p"> Link:
          <a class='planet__link' :href=" url " target="_blank">View</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"/>
<style src="./style.sass" lang="sass" scoped></style>
