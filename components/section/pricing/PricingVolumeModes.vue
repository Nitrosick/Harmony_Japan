<template>
  <section class="modes content">
    <p class="modes-eyebrow">
      {{ $t('pricing.modes.eyebrow') }}
    </p>

    <h2>{{ $t('pricing.modes.title') }}</h2>

    <p class="modes-text">
      {{ $t('pricing.modes.text') }}
    </p>

    <div class="modes-grid">
      <article
        v-for="modeKey in modeKeys"
        :key="modeKey"
        class="modes-card"
      >
        <p class="modes-card-label">
          {{ $t(`pricing.modes.cards.${modeKey}.label`) }}
        </p>

        <h3>{{ $t(`pricing.modes.cards.${modeKey}.title`) }}</h3>

        <p class="modes-card-text">
          {{ $t(`pricing.modes.cards.${modeKey}.description`) }}
        </p>

        <p class="modes-card-inputs">
          {{ $t(`pricing.modes.cards.${modeKey}.inputs`) }}
        </p>

        <p
          v-if="modeKey !== 'direct_tb'"
          class="modes-card-formula"
        >
          {{ $t(`pricing.modes.cards.${modeKey}.formula`) }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
const modeKeys = [
  'direct_tb',
  'flow',
  'eps'
]
</script>

<style lang="scss" scoped>
.modes {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.modes-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.modes-text {
  max-width: rem(980);
  margin: 0;
  opacity: 0.76;
}

.modes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(18);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.modes-card {
  display: flex;
  flex-direction: column;
  gap: rem(12);
  min-height: 100%;
  padding: rem(24);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: rem(24);
  background: rgba(255, 255, 255, 0.04);
}

.modes-card-label {
  margin: 0;
  font-size: rem(13);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.5;
}

.modes-card-text,
.modes-card-inputs,
.modes-card-formula {
  margin: 0;
  opacity: 0.76;
  line-height: 1.6;
}

.modes-card-inputs {
  font-weight: 600;
}

.modes-card-formula {
  font-family: $font-main;
  font-size: rem(15);
  opacity: 0.68;
}
</style>
