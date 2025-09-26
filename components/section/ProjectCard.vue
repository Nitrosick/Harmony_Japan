<template>
  <div
    class="project-card"
    :style="{ backgroundImage: data.bg ? `url(/images/${data.bg})` : undefined }"
  >
    <div class="project-card-content">
      <h3 class="project-card-title">
        {{ $t(`projects.items.titles[${data.id - 1}]`) }}
      </h3>
      <p
        class="project-card-description"
        v-html="$t(`projects.items.descriptions[${data.id - 1}]`)"
      />
      <Button
        :text="$t('main.contact_us')"
        to="/#contacts"
      />
    </div>
    <Motion
      class="project-card-image"
      :initial="{
        x: 30,
        opacity: 0
      }"
      :while-in-view="{
        x: 0,
        opacity: 1,
        transition: { duration: 2, ease: 'easeInOut' }
      }"
      :inViewOptions="{ once: true }"
    >
      <picture>
        <source
          :srcset="`/images/${data.image}_m.webp`"
          media="(max-width: 576px)"
        >
        <img
          :src="`/images/${data.image}.webp`"
          :class="{ contain: data.contain }"
          alt="project image"
          loading="lazy"
          width="720"
          height="480"
        >
      </picture>
    </Motion>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true }
})
</script>

<style lang="scss" scoped>
.project-card {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: rem(65);
  width: 100%;
  padding: fluid(80, 30);
  padding-right: 0;
  border-radius: rem(32);
  background: var(--card-bg-gradient);
  background-position: center;
  background-size: cover;
  overflow: hidden;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: rem(48);

    @include bp-sm {
      gap: rem(30);
    }
  }

  &-image {
    border-radius: rem(24) 0 0 rem(24);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .contain {
      object-fit: contain;
    }
  }

  &-description {
    opacity: 0.4;
    max-width: rem(360);

    @include bp-sm {
      padding-right: fluid(80, 30);
    }
  }

  &-title {
    @include bp-sm {
      padding-right: fluid(80, 30);
    }
  }

  @include bp-sm {
    grid-template-columns: 1fr;
    gap: rem(30);
    padding-bottom: 0;
    padding-right: 0;
    background: var(--card-bg-gradient) !important;

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: $color-background;
    }
  }
}
</style>
