<template>
  <div class="form-grid">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: rem(24);
}

@include bp-md {
  .form-grid {
    grid-template-columns: 1fr;
    gap: rem(20);
  }
}
</style>
