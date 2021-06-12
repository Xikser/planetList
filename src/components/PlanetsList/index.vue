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
          :planetName="item.name"
          :planetRotation="item.rotation_period"
          :planetClimate="item.climate"
          :planetGravity="item.gravity"
          :planetCreated="item.created"
          :planetUrl="item.url"
        >
        </PlanetItem>
      </li>
    </ul>
  </section>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js"/>
