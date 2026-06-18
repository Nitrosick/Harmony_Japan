<template>
  <section class="pricing content">
    <div class="pricing-copy">
      <p class="pricing-eyebrow">
        {{ $t('home.pricing_teaser.eyebrow') }}
      </p>

      <h2>{{ $t('home.pricing_teaser.title') }}</h2>

      <p class="pricing-text">
        {{ $t('home.pricing_teaser.text') }}
      </p>
      
      <p class="pricing-note">
        {{ $t('home.pricing_teaser.note') }}
      </p>
    </div>

    <Button
      :text="$t('home.pricing_teaser.cta')"
      to="/pricing"
      :adaptable="false"
    />
  </section>
</template>

<style lang="scss" scoped>
.pricing {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: rem(30);
  align-items: center;
  padding: rem(64) fluid(80, 20);
  border-radius: rem(32);
  background:
    linear-gradient(135deg, rgba(3, 252, 146, 0.08), rgba(1, 180, 235, 0.05)),
    var(--card-bg-gradient);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.pricing-copy {
  display: flex;
  flex-direction: column;
  gap: rem(16);
}

.pricing-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.pricing-text,
.pricing-note {
  margin: 0;
  opacity: 0.72;
}

.pricing-note {
  font-size: rem(16);
}
</style>
