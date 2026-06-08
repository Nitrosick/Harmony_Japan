<template>
  <section class="pricing-cta content">
    <p class="pricing-cta-eyebrow">
      {{ $t('saf.page.pricing_cta.eyebrow') }}
    </p>

    <h2>{{ $t('saf.page.pricing_cta.title') }}</h2>
    
    <p class="pricing-cta-text">
      {{ $t('saf.page.pricing_cta.text') }}
    </p>

    <div class="pricing-cta-actions">
      <Button
        :text="$t('saf.page.pricing_cta.primary_cta')"
        to="/pricing"
        :adaptable="false"
      />
      <Button
        :text="$t('saf.page.pricing_cta.secondary_cta')"
        to="/contact"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pricing-cta {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: rem(64) fluid(80, 20);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.pricing-cta-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.pricing-cta-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.pricing-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
}
</style>
