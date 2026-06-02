<template>
  <section class="final-cta content">
    <h2>{{ $t('pricing.final_cta.title') }}</h2>
    <p class="final-cta-text">
      {{ $t('pricing.final_cta.text') }}
    </p>

    <div class="final-cta-actions">
      <Button
        :text="$t('pricing.final_cta.actions.contact_sales')"
        to="/contact?inquiry=Pricing"
        :adaptable="false"
      />
      <Button
        :text="$t('pricing.final_cta.actions.learn_more')"
        to="/saf"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.final-cta {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(80);
}

.final-cta-text {
  max-width: rem(900);
  margin: 0;
  opacity: 0.76;
}

.final-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
  margin-top: rem(8);
}
</style>
