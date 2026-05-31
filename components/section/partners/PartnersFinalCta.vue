<template>
  <section class="final-cta content">
    <h2>{{ $t('partners.final_cta.title') }}</h2>
    <p class="final-cta-text">
      {{ $t('partners.final_cta.text') }}
    </p>

    <div class="final-cta-actions">
      <Button
        :text="$t('partners.final_cta.actions.discuss')"
        to="/contact"
        :adaptable="false"
      />
      <Button
        :text="$t('partners.final_cta.actions.saf')"
        to="/saf"
      />
      <Button
        :text="$t('partners.final_cta.actions.pricing')"
        to="/pricing"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.final-cta {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(96);
}

.final-cta-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.final-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
}
</style>
