<template>
  <section class="trust content">
    <p class="trust-eyebrow">
      {{ $t('partners.trust.eyebrow') }}
    </p>

    <h2>{{ $t('partners.trust.title') }}</h2>
    
    <p class="trust-text">
      {{ $t('partners.trust.text') }}
    </p>
  </section>
</template>

<style lang="scss" scoped>
.trust {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.trust-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.trust-text {
  max-width: rem(980);
  margin: 0;
  opacity: 0.72;
}
</style>
