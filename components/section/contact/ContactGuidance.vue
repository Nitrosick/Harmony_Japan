<template>
  <section class="guidance content">
    <p class="guidance-eyebrow">
      {{ $t('contact.guidance.eyebrow') }}
    </p>
    
    <h2>{{ $t('contact.guidance.title') }}</h2>

    <ul class="guidance-list">
      <li
        v-for="item in guidanceItems"
        :key="item"
        class="guidance-list-item"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n()

const guidanceItems = computed(() => {
  const value = tm('contact.guidance.items')
  return Array.isArray(value)
    ? value.map((item) => rt(item))
    : []
})
</script>

<style lang="scss" scoped>
.guidance {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.guidance-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.guidance-list {
  display: grid;
  gap: rem(14);
  max-width: rem(980);
  margin: 0;
  padding-left: rem(20);
  opacity: 0.8;
}

.guidance-list-item {
  line-height: 1.6;
}
</style>
