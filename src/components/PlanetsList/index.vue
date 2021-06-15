<template>
  <section class="planetlist">
    <ul class="planetlist__list">
      <li
        class="planetlist__list-item"
        v-for="item in $store.state.filteredPlanets"
        :key="item.name"
      >
        <PlanetItem
          :class="{'isLoading' : $store.state.loading}"
          :name="item.name"
          :rotation="item.rotation"
          :climates="item.climates"
          :gravity="item.gravity"
          :created="item.created"
          :url="item.url"
        >
        </PlanetItem>
      </li>
    </ul>
  </section>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js"/>
