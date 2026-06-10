<template>
  <section class="hero content">
    <p class="hero-eyebrow">
      {{ $t('pricing.hero.eyebrow') }}
    </p>

    <h1>{{ $t('pricing.hero.title') }}</h1>
    
    <p class="hero-text">
      {{ $t('pricing.hero.description') }}
    </p>

    <div class="hero-actions">
      <Button
        :text="$t('pricing.hero.actions.start_calculation')"
        href="#pricing-estimator"
        :adaptable="false"
      />
      <Button
        :text="$t('pricing.hero.actions.contact_sales')"
        to="/contact?inquiry=Pricing"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(24);
  padding: rem(170) fluid(80, 20) rem(80);
}

.hero-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.hero-text {
  max-width: rem(900);
  margin: 0;
  opacity: 0.72;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
  margin-top: rem(8);
}
</style>
