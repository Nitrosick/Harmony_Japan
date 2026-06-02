<template>
  <section class="model content">
    <p class="model-eyebrow">
      {{ $t('pricing.model.eyebrow') }}
    </p>
    <h2>{{ $t('pricing.model.title') }}</h2>
    <p class="model-text">
      {{ $t('pricing.model.intro') }}
    </p>

    <ul class="model-list">
      <li
        v-for="itemKey in itemKeys"
        :key="itemKey"
        class="model-list-item"
      >
        {{ $t(`pricing.model.items.${itemKey}`) }}
      </li>
    </ul>

    <p class="model-note">
      {{ $t('pricing.model.note') }}
    </p>
  </section>
</template>

<script setup>
const itemKeys = ['volume', 'independence', 'commercial_terms', 'preliminary_estimate']
</script>

<style lang="scss" scoped>
.model {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.model-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.model-text,
.model-note {
  max-width: rem(980);
  margin: 0;
  opacity: 0.76;
}

.model-list {
  display: grid;
  gap: rem(14);
  max-width: rem(980);
  margin: 0;
  padding-left: rem(20);
  opacity: 0.82;
}

.model-list-item {
  line-height: 1.6;
}
</style>
