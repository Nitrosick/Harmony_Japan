<template>
  <div
    class="project-card"
    :style="{ backgroundImage: data.bg ? `url(/images/${data.bg})` : undefined }"
  >
    <div class="project-card-content">
      <h3>{{ $t(`projects.items.titles[${data.id - 1}]`) }}</h3>
      <p
        class="project-card-description"
        v-html="$t(`projects.items.descriptions[${data.id - 1}]`)"
      />
      <Button
        :text="$t('main.contact_us')"
        to="#contacts"
      />
    </div>
    <div class="project-card-image">
      <img
        :src="`/images/${data.image}`"
        :class="{ contain: data.contain }"
        alt="project image"
        loading="lazy"
        width="720"
        height="480"
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true }
})
</script>

<style lang="scss" scoped>
.project-card {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: rem(20);
  width: 100%;
  padding: rem(80);
  padding-right: 0;
  border-radius: rem(32);
  background: var(--card-bg-gradient);
  background-position: center;
  background-size: cover;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: rem(48);
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
  }
}
</style>
