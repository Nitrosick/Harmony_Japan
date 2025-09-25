<template>
  <NuxtLink :to="$localePath('/')">
    <img
      src="/images/logo_1.svg"
      alt="logo"
      class="logo"
      loading="lazy"
      width="156"
      height="42"
    >
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  max-width: fluid(156, 108);
  max-height: fluid(42, 26);
}
</style>
