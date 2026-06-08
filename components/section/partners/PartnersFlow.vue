<template>
  <section class="flow content">
    <p class="flow-eyebrow">
      {{ $t('partners.flow.eyebrow') }}
    </p>
    
    <h2>{{ $t('partners.flow.title') }}</h2>

    <ol class="flow-list">
      <li
        v-for="item in flowItems"
        :key="item"
        class="flow-list-item"
      >
        {{ item }}
      </li>
    </ol>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n()

const flowItems = computed(() => {
  const value = tm('partners.flow.items')
  return Array.isArray(value)
    ? value.map((item) => rt(item))
    : []
})
</script>

<style lang="scss" scoped>
.flow {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.flow-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.flow-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(16);
  margin: 0;
  padding-left: rem(22);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.flow-list-item {
  line-height: 1.6;
  opacity: 0.8;
}
</style>
