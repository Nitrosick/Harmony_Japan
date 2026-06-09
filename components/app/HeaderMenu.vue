<template>
  <nav class="menu">
    <NuxtLink
      v-for="item in visibleMenuItems"
      :key="item.id"
      :to="localePath(item.to)"
      class="menu-item"
      :class="{ 'menu-item-contact': item.key === 'contact' }"
      @click="emits('close')"
    >
      {{ $t(`nav.${item.key}`) }}
    </NuxtLink>
    <Language @close="emits('close')" />
  </nav>
</template>

<script setup>
const emits = defineEmits(['close'])
const localePath = useLocalePath()

const menuItems = [
  { id: 1, to: '/saf', key: 'saf' },
  { id: 2, to: '/use-cases', key: 'use_cases' },
  { id: 3, to: '/pricing', key: 'pricing' },
  { id: 4, to: '/technology', key: 'technology' },
  { id: 5, to: '/blog', key: 'blog', hidden: true },
  { id: 6, to: '/contact', key: 'contact' }
]

const visibleMenuItems = computed(() => menuItems.filter((item) => !item.hidden))
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: rem(4) rem(8);

  &-item {
    line-height: rem(45);
    padding: 0 rem(12);
    font-size: rem(15);

    @include bp-md {
      padding: 0;
      font-size: rem(21);
      font-weight: 500;
    }
  }

  &-item-contact {
    font-weight: 700;
    opacity: 1;
  }

  @include bp-md {
    align-items: flex-start;
    flex-direction: column;
    gap: 0;
  }
}
</style>
