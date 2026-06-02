<template>
  <section class="problem content">
    <p class="problem-eyebrow">
      {{ $t('saf_solution_development.problem.eyebrow') }}
    </p>
    <h2>{{ $t('saf_solution_development.problem.title') }}</h2>

    <ul class="problem-list">
      <li
        v-for="item in problemItems"
        :key="item"
        class="problem-list-item"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n()

const problemItems = computed(() => {
  const value = tm('saf_solution_development.problem.items')
  return Array.isArray(value)
    ? value.map((item) => rt(item))
    : []
})
</script>

<style lang="scss" scoped>
.problem {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.problem-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.problem-list {
  display: grid;
  gap: rem(14);
  max-width: rem(980);
  margin: 0;
  padding-left: rem(20);
  opacity: 0.8;
}

.problem-list-item {
  line-height: 1.6;
}
</style>
