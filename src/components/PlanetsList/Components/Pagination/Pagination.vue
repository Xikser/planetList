<template>
  <section class="pagination">
    <ul class="pagination__list">

      <button
        class="pagination__prev"
        @click="prevPage()"
        :disabled="prevButtonStatus"
      >
        Previous page
      </button>

      <li class="pagination__page"
          v-for="page in pages"
          :key="page"
          :class="{'isActive' : page === activeItem}"
          @click="handlePaginationClick(page)"
      >
        {{ page }}
      </li>

      <button
        class="pagination__next"
        @click="nextPage()"
        :disabled="nextButtonStatus"
      >
        Next page
      </button>
    </ul>
  </section>
</template>

<script src="./component.js"/>
<style src="./style.sass" lang="sass" scoped></style>
