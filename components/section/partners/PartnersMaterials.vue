<template>
  <section class="materials content">
    <p class="materials-eyebrow">
      {{ $t('partners.materials.eyebrow') }}
    </p>
    <h2>{{ $t('partners.materials.title') }}</h2>
    <p class="materials-text">
      {{ $t('partners.materials.text') }}
    </p>

    <ul class="materials-list">
      <li
        v-for="item in materialItems"
        :key="item"
        class="materials-list-item"
      >
        {{ item }}
      </li>
    </ul>

    <Button
      :text="$t('partners.materials.cta')"
      to="/contact"
      :adaptable="false"
    />
  </section>
</template>

<script setup>
const { tm, rt } = useI18n()

const materialItems = computed(() => {
  const value = tm('partners.materials.items')
  return Array.isArray(value)
    ? value.map((item) => rt(item))
    : []
})
</script>

<style lang="scss" scoped>
.materials {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.materials-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.materials-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.materials-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(14);
  max-width: rem(980);
  margin: rem(8) 0 0;
  padding-left: rem(20);
  opacity: 0.8;

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.materials-list-item {
  line-height: 1.6;
}
</style>
