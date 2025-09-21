<template>
  <nav class="menu">
    <NuxtLink
      v-for="item in menuItems"
      :key="item.id"
      :to="item.to"
      class="menu-item"
    >
      {{ $t(`menu.${item.text}`) }}
    </NuxtLink>
    <Language />
  </nav>
</template>

<script setup>
const menuItems = [
  { id: 1, to: '#about', text: 'about' },
  { id: 2, to: '#projects', text: 'projects' },
  { id: 3, to: '#contacts', text: 'contacts' }
]
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;

  &-item {
    line-height: rem(45);
    padding: 0 rem(20);
    font-size: rem(16);
  }
}
</style>
