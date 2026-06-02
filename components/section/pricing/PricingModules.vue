<template>
  <section class="modules content">
    <p class="modules-eyebrow">
      {{ $t('pricing.modules.eyebrow') }}
    </p>
    <h2>{{ $t('pricing.modules.title') }}</h2>
    <p class="modules-text">
      {{ $t('pricing.modules.text') }}
    </p>

    <div class="modules-grid">
      <div
        v-for="moduleKey in moduleKeys"
        :key="moduleKey"
        class="modules-item"
      >
        {{ $t(`pricing.modules.items.${moduleKey}`) }}
      </div>
    </div>
  </section>
</template>

<script setup>
const moduleKeys = [
  'incident_management',
  'inventory',
  'case_management',
  'manual_actions',
  'network_monitoring',
  'server_monitoring',
  'ms_active_directory',
  'ms_exchange',
  'network_mapping',
  'compliance_reports'
]
</script>

<style lang="scss" scoped>
.modules {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.modules-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.modules-text {
  max-width: rem(980);
  margin: 0;
  opacity: 0.76;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: rem(14);

  @include bp-lg {
    grid-template-columns: repeat(3, 1fr);
  }

  @include bp-md {
    grid-template-columns: repeat(2, 1fr);
  }

  @include bp-sm {
    grid-template-columns: 1fr;
  }
}

.modules-item {
  padding: rem(18) rem(20);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: rem(20);
  background: rgba(255, 255, 255, 0.04);
  line-height: 1.5;
  opacity: 0.84;
}
</style>
