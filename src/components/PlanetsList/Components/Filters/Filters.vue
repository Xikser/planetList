<template>
  <section class="filters">
    <h2>Filtrowanie:</h2>

    <label for="default">
      <input
        type="submit"
        id="default"
        value="Default"
        @click="setFilter('default')"
      >
    </label>

    <label for="name">
      <input
        type="submit"
        id="name"
        value="Alfabetycznie (A-Z)"
        @click="setFilter('alph')"
      >
    </label>

    <label for="rotation">
      <input
        type="submit"
        id="rotation"
        value="Okres rotacji (rosnąco)"
        @click="setFilter('rotation')"
      >
    </label>
  </section>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js"/>
