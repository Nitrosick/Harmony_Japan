<template>
  <NuxtLink
    v-if="to"
    :to="$localePath(to)"
    class="button"
  >
    <div class="button-text">
      <span v-if="text">{{ text }}</span>
      <Icon
        v-if="icon"
        :name="icon"
      />
    </div>
  </NuxtLink>
  <Component
    v-else
    :is="href ? 'a' : 'button'"
    :href="href"
    :to="to"
    :download="download"
    :target="target"
    class="button"
  >
    <div class="button-text">
      <span v-if="text">{{ text }}</span>
      <Icon
        v-if="icon"
        :name="icon"
      />
    </div>
  </Component>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: null },
  icon: { type: String, default: null },
  href: { type: String, default: undefined },
  to: { type: String, default: undefined },
  download: { type: [String, Boolean], default: undefined }
})

const target = computed(() => {
  const { href } = props
  if (!href || href.startsWith('#')) return undefined
  return '_blank'
})
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: $font-main;
  background-color: $color-text;
  color: $color-background;
  border-radius: 100rem;
  padding: rem(25) rem(100);
  overflow: hidden;

  &-text {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: rem(20);
    white-space: nowrap;
    z-index: 1;
  }

  // &:hover {
  // }

  // &:focus {
  // }

  // &:active {
  // }
}
</style>
