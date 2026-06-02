<template>
  <section class="guide content">
    <p class="guide-eyebrow">
      {{ $t('pricing.inquiry_guide.eyebrow') }}
    </p>
    <h2>{{ $t('pricing.inquiry_guide.title') }}</h2>

    <ul class="guide-list">
      <li
        v-for="itemKey in itemKeys"
        :key="itemKey"
        class="guide-list-item"
      >
        {{ $t(`pricing.inquiry_guide.items.${itemKey}`) }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const itemKeys = [
  'raw_data_volume',
  'daily_ingest_or_eps',
  'retention_period',
  'target_bundle_or_use_case',
  'required_modules',
  'deployment_context'
]
</script>

<style lang="scss" scoped>
.guide {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.guide-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.guide-list {
  display: grid;
  gap: rem(14);
  max-width: rem(980);
  margin: 0;
  padding-left: rem(20);
  opacity: 0.82;
}

.guide-list-item {
  line-height: 1.6;
}
</style>
