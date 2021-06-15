<template>
  <section class="sort">
    <h2>Sort by:</h2>

    <label for="name">
      <input
        type="submit"
        id="name"
        value="Alphabetically (A-Z)"
        :class="{'sortActive' : sortActiveItem === 'Alphabetically (A-Z)'}"
        @click="setSortType( 'letter', $event)"
      >
    </label>

    <label for="rotation">
      <input
        type="submit"
        id="rotation"
        value="Rotation period (Lower to Hight)"
        :class="{'sortActive' : sortActiveItem === 'Rotation period (Lower to Hight)'}"
        @click="setSortType('rotation', $event)"
      >
    </label>

    <label for="default">
      <input
        type="submit"
        id="default"
        value="Default"
        :class="{'sortActive' : sortActiveItem === 'Default'}"
        @click="setSortType('default', $event)"
      >
    </label>
  </section>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js"/>
