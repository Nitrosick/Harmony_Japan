<template>
  <section class="hero content">
    <h1>{{ $t('pricing.hero.title') }}</h1>
    
    <p class="description hero-text">
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
  align-items: center;
  justify-content: center;
  gap: rem(30);
  min-height: calc(100vh - rem(75));
  padding: fluid(100, 75) fluid(80, 20) fluid(120, 100) fluid(80, 20);
}

.hero-text {
  max-width: rem(900);
  text-align: center;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
  margin-top: rem(8);
}
</style>
