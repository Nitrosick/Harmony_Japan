<template>
  <header class="header">
    <div class="header-content content">
      <Logo />
      <div class="header-menu">
        <HeaderMenu @close="menuOpened = false" />
      </div>
      <button
        class="header-menu-switcher"
        @click.prevent="menuOpened = !menuOpened"
      >
        <Icon
          :name="menuOpened ? 'close' : 'burger'"
          size="l"
        />
      </button>
    </div>
  </header>

  <nav
    class="header-dropdown-menu"
    :class="{ 'header-dropdown-menu-opened': menuOpened }"
  >
    <HeaderMenu @close="menuOpened = false" />
  </nav>
</template>

<script setup>
const menuOpened = ref(false)

watch(menuOpened, (value) => {
  if (value) document.body.classList.add('lock-scroll');
  else document.body.classList.remove('lock-scroll');
})
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $color-header-background;
  backdrop-filter: blur(3px);
  z-index: 3;

  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: fluid(30, 20) fluid(80, 20);
  }

  &-menu {
    @include bp-md {
      display: none;
    }
  }

  &-menu-switcher {
    display: none;
    width: rem(40);
    height: rem(40);

    @include bp-md {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-dropdown-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(30px);
    padding: rem(110) fluid(80, 20) rem(40) fluid(80, 20);
    z-index: 2;
    transition: opacity $transition-time;
    opacity: 0;
    pointer-events: none;

    @include bp-md {
      display: block;
    }
  }

  &-dropdown-menu-opened {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
