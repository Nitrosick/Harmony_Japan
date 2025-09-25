<template>
  <div class="main">
    <h1>{{ $t('main.title') }}</h1>
    <p
      class="main-text"
      v-html="$t('main.description')"
    />
    <Button
      :text="$t('main.contact_us')"
      to="#contacts"
      :adaptable="false"
    />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background-image: url(/public/images/bg_1.webp);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: rem(60);
  text-align: center;
  padding: 0 fluid(80, 20);

  &-text {
    max-width: rem(400);
  }
}
</style>
