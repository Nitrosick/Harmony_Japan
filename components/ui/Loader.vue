<template>
  <div
    class="loader"
    :class="{ hidden: !on }"
  >
    <div class="loader-bar" />
  </div>
</template>

<script setup>
const props = defineProps({
  on: { type: Boolean, required: true }
})
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: $color-background;
  opacity: 1;
  transition: opacity calc($transition-time * 2);
  z-index: 10;

  &-bar {
    width: rem(300);
    height: rem(6);
    border-radius: 100rem;
    background: var(--green-blue-gradient);
    background-size: 400% 100%;
    background-position: 0 0;
    animation: gradientMove 4s ease infinite;
  }
}

.hidden {
  opacity: 0;
  pointer-events: none;
}

@keyframes gradientMove {
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 0%; }
  100% { background-position: 0% 0%; }
}
</style>
