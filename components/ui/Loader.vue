<template>
  <div>
    Loading...
  </div>
  <!-- <div
    class="loader"
    :class="{ hidden: !on }"
  >
    <div class="spinner">
      <div
        v-for="n in 8"
        :key="n"
        class="spinner-dot"
        :style="{ transform: `rotate(${n * 45}deg)` }"
      />
    </div>
  </div> -->
</template>

<script setup>
const props = defineProps({
  on: { type: Boolean, required: true }
})
</script>

<style lang="scss" scoped>
// .loader {
//   position: fixed;
//   top: 0;
//   right: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100vw;
//   height: 100vh;
//   background-color: $color-background;
//   opacity: 1;
//   transition: opacity calc($transition-time * 2), transform 0s calc($transition-time * 2);
//   z-index: 10;
// }

// .hidden {
//   opacity: 0;
//   transform: scale(0, 0);
// }

// .spinner {
//   position: relative;
//   width: 3.3rem;
//   height: 3.3rem;
//   animation: rotate 3s infinite;

//   &-dot {
//     position: absolute;
//     width: 0.9rem;
//     height: 0.9rem;
//     background-color: var(--color-orange-1);
//     border-radius: 50%;
//     transform-origin: 180% 180%;
//     animation: color 3s infinite;
//   }
// }

// @keyframes rotate {
//   0% { transform: rotate(0deg) scale(1, 1) }
//   50% { transform: rotate(180deg) scale(1.3, 1.3) }
//   100% { transform: rotate(360deg) scale(1, 1) }
// }

// @keyframes color {
//   0% { background-color: var(--color-orange-1) }
//   50% { background-color: var(--color-orange-3) }
//   100% { background-color: var(--color-orange-1) }
// }
</style>
