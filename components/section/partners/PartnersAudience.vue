<template>
  <section class="audience content">
    <p class="audience-eyebrow">
      {{ $t('partners.audience.eyebrow') }}
    </p>

    <h2>{{ $t('partners.audience.title') }}</h2>

    <p class="audience-text">
      {{ $t('partners.audience.text') }}
    </p>

    <div class="audience-grid">
      <article
        v-for="key in audienceKeys"
        :key="key"
        class="audience-card"
      >
        <h3>{{ $t(`partners.audience.items.${key}.title`) }}</h3>
        <p>{{ $t(`partners.audience.items.${key}.text`) }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const audienceKeys = [
  'system_integrators',
  'msp_mssp',
  'technology_providers',
  'local_business_partners'
]
</script>

<style lang="scss" scoped>
.audience {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.audience-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.audience-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: rem(20);
  margin-top: rem(10);

  @include bp-xl {
    grid-template-columns: repeat(2, 1fr);
  }

  @include bp-sm {
    grid-template-columns: 1fr;
  }
}

.audience-card {
  display: flex;
  flex-direction: column;
  gap: rem(14);
  padding: fluid(28, 22);
  border-radius: rem(28);
  background: var(--card-bg-gradient);

  p {
    margin: 0;
    opacity: 0.72;
  }
}
</style>
