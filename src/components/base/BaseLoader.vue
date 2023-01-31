<template>
  <div id="preloader" class="loader flex justify-center items-center h-full">
    <svg
      width="218"
      height="218"
      viewBox="0 0 218 218"
      fill="none"
      class="loader__svg"
      :class="`--${size}`"
    >
      <path
        d="M83.3805 214.946C66.6611 210.903 51.1359 202.961 38.0742 191.768C25.0126 180.575 14.7854 166.45 8.2288 150.547C1.67223 134.644 -1.02755 117.416 0.350194 100.27C1.72794 83.1235 7.14409 66.547 16.1558 51.8952L34.7247 63.3162C27.5153 75.0376 23.1823 88.2988 22.0802 102.016C20.978 115.733 23.1378 129.516 28.383 142.238C33.6283 154.96 41.8101 166.26 52.2594 175.214C62.7087 184.169 75.1289 190.523 88.5044 193.757L83.3805 214.946Z"
        fill="#FFC700"
        class="loader__semicircle"
      />
      <path
        d="M122.311 0.815777C139.383 2.91634 155.716 9.02766 169.975 18.6501C184.233 28.2725 196.011 41.1328 204.347 56.1795C212.682 71.2262 217.339 88.0321 217.935 105.223C218.531 122.414 215.05 139.502 207.776 155.09L188.021 145.872C193.84 133.402 196.624 119.731 196.148 105.978C195.671 92.2257 191.946 78.7809 185.277 66.7436C178.609 54.7062 169.186 44.418 157.78 36.7201C146.373 29.0221 133.307 24.1331 119.649 22.4526L122.311 0.815777Z"
        fill="#FFC700"
        class="loader__semicircle"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "BaseLoader",

  props: {
    size: {
      type: String,
      default: "md",
      validator: (size) => ["xs", "sm", "md", "lg"].includes(size),
    },
  },
};
</script>

<style scoped lang="scss">
@keyframes loader-animation-rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  padding: 24px 0;

  &__svg {
    &.--lg {
      height: 200px;
      width: 200px;
    }

    &.--md {
      height: 150px;
      width: 150px;
    }

    &.--sm {
      height: 100px;
      width: 100px;
    }

    &.--xs {
      height: 40px;
      width: 40px;
    }
  }

  &__semicircle {
    transform-origin: center;
    animation: loader-animation-rotate 2s 0s linear infinite;
  }
}
</style>
