<template>
  <section class="filter">
    <h2>filters:</h2>

    <h3>By Climate:</h3>
    <select name="terrain" id="terrain" class="terrain__select">
      <option class="filter__item" value="All" @click="filter">All</option>
      <option
        class="filter__item"
        v-for="climate in $store.state.climates"
        :key="climate"
        :value="climate"
        @click="filter"
      >
        {{ climate }}
      </option>
    </select>
  </section>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js"/>
