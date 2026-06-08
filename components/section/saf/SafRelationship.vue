<template>
  <section class="relationship content">
    <div class="relationship-copy">
      <p class="relationship-eyebrow">
        {{ $t('saf.page.relationship.eyebrow') }}
      </p>

      <h2>{{ $t('saf.page.relationship.title') }}</h2>
      
      <p class="relationship-text">
        {{ $t('saf.page.relationship.text') }}
      </p>
    </div>

    <div class="relationship-actions">
      <Button
        :text="$t('saf.page.relationship.secondary_cta')"
        to="/contact"
        :adaptable="false"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.relationship {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: rem(32);
  align-items: end;
  padding: rem(96) fluid(80, 20) rem(48);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.relationship-copy {
  display: flex;
  flex-direction: column;
  gap: rem(18);
}

.relationship-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.relationship-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.relationship-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
}
</style>
