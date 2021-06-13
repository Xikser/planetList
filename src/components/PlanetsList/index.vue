<template>
  <section class="planetlist">
    <ul class="planetlist__list">
      <li
        class="planetlist__list-item"
        v-for="item in planets"
        :key="item.name"
      >
        <PlanetItem
          :class="{'isLoading' : $store.state.loading}"
          :name="item.name"
          :rotation="item.rotation_period"
          :climate="item.climate"
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
