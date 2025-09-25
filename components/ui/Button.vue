<template>
  <NuxtLink
    v-if="to"
    :to="$localePath(to)"
    class="button"
    :class="{ 'button-adaptable': adaptable }"
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
  download: { type: [String, Boolean], default: undefined },
  adaptable: { type: Boolean, default: true }
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
  font-weight: 600;
  background-color: $color-text;
  color: var(--color-blue);
  border-radius: fluid(24, 16);
  padding: fluid(25, 15) fluid(100, 57);
  overflow: hidden;
  transition: color $transition-time;

  &-text {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: fluid(20, 16);
    white-space: nowrap;
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--color-light-blue);
  }
}

.button-adaptable {
  padding: fluid(25, 10) fluid(100, 45);

  @include bp-sm {
    background-color: var(--color-white-o);
    color: $color-text;
    font-weight: 400;
    border: 1px solid var(--color-light-grey);
    transition: border-color $transition-time;

    &:hover {
      color: $color-text;
      border-color: $color-text;
    }
  }
}
</style>
