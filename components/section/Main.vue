<template>
  <div class="main">
    <Motion
      class="background"
      :initial="{
        scale: 1.15,
      }"
      :animate="{
        scale: 1,
        transition: { duration: 8 }
      }"
    />
    <h1>{{ $t('main.title') }}</h1>
    <p
      class="main-text"
      v-html="$t('main.description')"
    />
    <Button
      :text="$t('main.contact_us')"
      to="/#contacts"
      :adaptable="false"
    />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: rem(60);
  text-align: center;
  padding: 0 fluid(80, 20);
  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: $color-background;
  }

  h1 {
    position: relative;
    z-index: 1;
  }

  &-text {
    max-width: rem(400);
    position: relative;
    z-index: 1;
  }
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/public/images/bg_1.webp);
  background-position: center;
  background-size: cover;
  transform-origin: 50% 100%;
}
</style>
