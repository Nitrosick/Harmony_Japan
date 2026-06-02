<template>
  <section class="bundles content">
    <p class="bundles-eyebrow">
      {{ $t('pricing.bundles.eyebrow') }}
    </p>
    <h2>{{ $t('pricing.bundles.title') }}</h2>
    <p class="bundles-text">
      {{ $t('pricing.bundles.text') }}
    </p>

    <div class="bundles-grid">
      <article
        v-for="bundleKey in bundleKeys"
        :key="bundleKey"
        class="bundles-card"
      >
        <h3>{{ $t(`pricing.bundles.items.${bundleKey}.title`) }}</h3>
        <p>
          {{ $t(`pricing.bundles.items.${bundleKey}.text`) }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
const bundleKeys = ['cybersecurity_siem', 'it_ops', 'compliance', 'custom_configuration']
</script>

<style lang="scss" scoped>
.bundles {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.bundles-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.bundles-text {
  max-width: rem(980);
  margin: 0;
  opacity: 0.76;
}

.bundles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(18);

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.bundles-card {
  display: flex;
  flex-direction: column;
  gap: rem(12);
  min-height: 100%;
  padding: rem(24);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: rem(24);
  background: rgba(255, 255, 255, 0.04);

  p {
    margin: 0;
    opacity: 0.76;
    line-height: 1.6;
  }
}
</style>
