<template>
  <section class="scenarios content">
    <p class="scenarios-eyebrow">
      {{ $t('partners.scenarios.eyebrow') }}
    </p>
    <h2>{{ $t('partners.scenarios.title') }}</h2>

    <div class="scenarios-grid">
      <article
        v-for="key in scenarioKeys"
        :key="key"
        class="scenarios-card"
      >
        <h3>{{ $t(`partners.scenarios.items.${key}.title`) }}</h3>
        <p>{{ $t(`partners.scenarios.items.${key}.text`) }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const scenarioKeys = [
  'solution_integration',
  'managed_services',
  'joint_sales',
  'localization_market_development',
  'saf_based_development_support'
]
</script>

<style lang="scss" scoped>
.scenarios {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.scenarios-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(20);

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.scenarios-card {
  display: flex;
  flex-direction: column;
  gap: rem(14);
  padding: fluid(30, 22);
  border-radius: rem(28);
  background: var(--card-bg-gradient);

  p {
    margin: 0;
    opacity: 0.72;
  }
}
</style>
