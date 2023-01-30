<template>
  <button @click="onClick" class="button">
    <span class="button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped></style>
