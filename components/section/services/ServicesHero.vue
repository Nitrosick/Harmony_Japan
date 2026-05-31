<template>
  <section class="hero content">
    <p class="hero-eyebrow">
      {{ $t('services.hero.eyebrow') }}
    </p>
    <h1>{{ $t('services.hero.title') }}</h1>
    <p class="hero-description">
      {{ $t('services.hero.description') }}
    </p>

    <div class="hero-actions">
      <Button
        :text="$t('services.hero.primary_cta')"
        to="/saf"
        :adaptable="false"
      />
      <Button
        :text="$t('services.hero.secondary_cta')"
        to="/contact"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: rem(24);
  padding: rem(170) fluid(80, 20) rem(72);
}

.hero-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.hero-description {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
}
</style>
