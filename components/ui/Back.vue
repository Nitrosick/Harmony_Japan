<template>
  <a
    href="#main"
    class="back-button"
    :class="{ hidden: scroll < height }"
  >
    <div class="back-button-bg" />
    <img
      src="/icons/arrow-up.svg"
      alt="arrow up"
      class="back-button-icon"
      loading="lazy"
    >
  </a>
</template>

<script setup>
const scroll = ref(0)
const height = ref(0)
const handleScroll = () => scroll.value = window.scrollY
const handleResize = () => height.value = window.innerHeight

onMounted(() => {
  height.value = window.innerHeight
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
.back-button {
  position: fixed;
  bottom: calc(20% + 0.3rem);
  right: calc(10% + 0.3rem);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.7rem;
  height: 6.7rem;
  z-index: 5;
  transition: opacity $transition-time;

  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.4rem solid var(--color-orange-3);
    outline: 0.3rem solid $color-background;
    background-color: $color-background;
    border-radius: 50%;
    opacity: 0.3;
    transition: opacity $transition-time;
  }

  &-icon {
    position: relative;
    z-index: 6;
    opacity: 0.3;
    transition: opacity $transition-time;
  }

  &:hover,
  &:focus,
  &:active {
    .back-button-bg {
      opacity: 0.4;
    }

    .back-button-icon {
      opacity: 1;
    }
  }

  @include bp-lg {
    display: none;
  }
}

.hidden {
  opacity: 0;
}
</style>
