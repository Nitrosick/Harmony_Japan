<template>
  <section class="areas content">
    <p class="areas-eyebrow">
      {{ $t('saf_solution_development.areas.eyebrow') }}
    </p>
    
    <h2>{{ $t('saf_solution_development.areas.title') }}</h2>

    <div class="areas-grid">
      <article
        v-for="key in areaKeys"
        :key="key"
        class="areas-card"
      >
        <h3>{{ $t(`saf_solution_development.areas.items.${key}.title`) }}</h3>
        <p>{{ $t(`saf_solution_development.areas.items.${key}.text`) }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const areaKeys = [
  'implementation_support',
  'dashboards_reporting',
  'integrations_connectors',
  'partner_customer_materials',
  'workflow_automation',
  'selected_non_saf_automation'
]
</script>

<style lang="scss" scoped>
.areas {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.areas-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(20);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.areas-card {
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
