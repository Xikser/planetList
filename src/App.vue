<template>
  <main class="app">
    <router-view/>
  </main>
</template>

<style lang="sass">
html
  font-size: 10px
  scroll-behavior: smooth

*, *::before, *::after
  box-sizing: border-box

body
  background: $third-color
  overflow-x: hidden
  width: 100vw
  font-family: Avenir, Helvetica, Arial, sans-serif
  color: $text-color

a
  text-decoration: none
  color: $text-color

ol, ul, li
  list-style: none
</style>
