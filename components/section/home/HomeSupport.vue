<template>
  <section class="support content">
    <p class="support-eyebrow">
      {{ $t('home.support.eyebrow') }}
    </p>

    <h2>{{ $t('home.support.title') }}</h2>

    <div class="support-grid">
      <article
        v-for="key in cardKeys"
        :key="key"
        class="support-card"
      >
        <h3>{{ $t(`home.support.cards.${key}.title`) }}</h3>

        <p class="support-card-text">
          {{ $t(`home.support.cards.${key}.text`) }}
        </p>

        <Button
          v-if="cardLinks[key]"
          :text="$t(`home.support.cards.${key}.cta`)"
          :to="cardLinks[key]"
          :adaptable="key !== 'platform'"
        />
      </article>
    </div>
  </section>
</template>

<script setup>
const cardKeys = [
  'platform',
  'development',
  'automation'
]

const cardLinks = {
  platform: '/saf',
  development: '/contact',
  automation: '/contact'
}
</script>

<style lang="scss" scoped>
.support {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: rem(32) fluid(80, 20) rem(64);
}

.support-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(20);
  margin-top: rem(10);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.support-card {
  display: flex;
  flex-direction: column;
  gap: rem(20);
  justify-content: space-between;
  padding: fluid(32, 24);
  border-radius: rem(28);
  background: var(--card-bg-gradient);

  &-text {
    margin: 0;
    opacity: 0.72;
  }
}
</style>
