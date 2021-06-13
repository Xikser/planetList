<template>
  <section class="sort">
    <h2>Sortowanie:</h2>

    <label for="default">
      <input
        type="submit"
        id="default"
        value="Default"
        @click="setSortType('default')"
      >
    </label>

    <label for="name">
      <input
        type="submit"
        id="name"
        value="Alfabetycznie (A-Z)"
        @click="setSortType('letter')"
      >
    </label>

    <label for="rotation">
      <input
        type="submit"
        id="rotation"
        value="Okres rotacji (rosnąco)"
        @click="setSortType('rotation')"
      >
    </label>
  </section>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js"/>
