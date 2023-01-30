<template>
  <div class="categories">
    <ul v-if="catesories" class="categories__list">
      <li>all</li>
      <li
        @click="onClickCategory(catesorie.id)"
        v-for="catesorie in catesories"
        :key="catesorie.id"
      >
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
  methods: {
    onClickCategory(id) {
      this.$emit("selectCategory", id);
    },
  },
};
</script>

<style scoped lang="scss"></style>
