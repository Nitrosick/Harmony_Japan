<template>
  <section class="section content">
    <div class="section-copy">
      <p class="section-eyebrow">
        {{ $t('home.relationship.eyebrow') }}
      </p>
      <h2>{{ $t('home.relationship.title') }}</h2>
      <p class="section-text">
        {{ $t('home.relationship.text') }}
      </p>
    </div>

    <div class="section-actions">
      <Button
        :text="$t('home.relationship.primary_cta')"
        to="/partners"
        :adaptable="false"
      />
      <Button
        :text="$t('home.relationship.secondary_cta')"
        to="/saf"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: rem(32);
  align-items: end;
  padding: rem(96) fluid(80, 20) rem(32);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.section-copy {
  display: flex;
  flex-direction: column;
  gap: rem(18);
}

.section-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.section-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.section-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
}
</style>
