<template>
  <header class="header">
    <div class="header-content content">
      <Logo />
      <HeaderMenu />
    </div>
  </header>
  <!-- <div class="header-container">
    <div class="background" />
    <header class="header">
      <Button
        text="contact me"
        href="#contacts"
        class="contacts-button"
      />
      <button
        class="menu-switcher"
        @click.prevent="menuOpened = !menuOpened"
      >
        <Icon name="burger" size="l" />
      </button>
    </header>
  </div> -->
</template>

<script setup>
const scroll = ref(0)
// const menuOpened = ref(false)
const handleScroll = () => scroll.value = window.scrollY

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $color-header-background;
  backdrop-filter: blur(3px);

  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: rem(30) rem(80);
  }

  // @include bp-lg {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   padding: $unit;
  // }
}
</style>
