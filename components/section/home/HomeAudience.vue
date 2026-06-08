<template>
  <section class="audience content">
    <p class="audience-eyebrow">
      {{ $t('home.audience.eyebrow') }}
    </p>

    <h2>{{ $t('home.audience.title') }}</h2>

    <p class="audience-text">
      {{ $t('home.audience.text') }}
    </p>

    <div class="audience-grid">
      <article
        v-for="key in audienceKeys"
        :key="key"
        class="audience-card"
      >
        <h4>{{ $t(`home.audience.items.${key}.title`) }}</h4>
        <p>{{ $t(`home.audience.items.${key}.text`) }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const audienceKeys = [
  'enterprises',
  'system_integrators',
  'msp_mssp',
  'technology_partners'
]
</script>

<style lang="scss" scoped>
.audience {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: rem(64) fluid(80, 20);
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
    opacity: 0.72;
  }
}
</style>
