<template>
  <div class="description content">
    <h3 class="description-title">
      {{ $t('description.title') }}
    </h3>
    &nbsp;
    <h3 class="description-text">
      {{ $t('description.text') }}
    </h3>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.description {
  padding: rem(120) rem(80);
  max-width: rem(1150);

  &-title {
    display: inline;
  }

  &-text {
    display: inline;
    opacity: 0.4;
  }
}
</style>
