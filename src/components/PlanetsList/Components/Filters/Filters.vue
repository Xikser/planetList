<template>
  <section class="filter">
    <h2>
      filters By Climate:
    </h2>
    <button name="climate" id="climate" class="climate__select">
      <button
        class="climate__button"
        value="All"
        @click="filter($event, -1)"
        :class="{'filterActive' : activeIndex === -1}"
      >
        All
      </button>

      <button
        class="climate__button"
        v-for="(climate, index) in $store.state.climates"
        :key="index"
        :value="climate"
        @click="filter($event, index)"
        :class="{'filterActive' : index === activeIndex}"
      >
        {{ climate }}
      </button>
    </button>
  </section>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js"/>
