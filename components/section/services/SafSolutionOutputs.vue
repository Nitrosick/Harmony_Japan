<template>
  <section class="outputs content">
    <p class="outputs-eyebrow">
      {{ $t('saf_solution_development.outputs.eyebrow') }}
    </p>
    <h2>{{ $t('saf_solution_development.outputs.title') }}</h2>

    <ul class="outputs-list">
      <li
        v-for="item in outputItems"
        :key="item"
        class="outputs-list-item"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n()

const outputItems = computed(() => {
  const value = tm('saf_solution_development.outputs.items')
  return Array.isArray(value)
    ? value.map((item) => rt(item))
    : []
})
</script>

<style lang="scss" scoped>
.outputs {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.outputs-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.outputs-list {
  display: grid;
  gap: rem(14);
  max-width: rem(980);
  margin: 0;
  padding-left: rem(20);
  opacity: 0.8;
}

.outputs-list-item {
  line-height: 1.6;
}
</style>
