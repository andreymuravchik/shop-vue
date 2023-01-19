<template>
  <div class="categories">
    <ul v-if="catesories" class="categories__list">
      <li>all</li>
      <li v-for="catesorie in catesories" :key="catesorie.id">
        {{ catesorie.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainCategories",
  props: {
    catesories: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped lang="scss"></style>
