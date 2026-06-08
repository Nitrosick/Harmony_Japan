<template>
  <section class="why content">
    <p class="why-eyebrow">
      {{ $t('home.why.eyebrow') }}
    </p>

    <h2>{{ $t('home.why.title') }}</h2>

    <div class="why-grid">
      <article
        v-for="key in itemKeys"
        :key="key"
        class="why-card"
      >
        <h4>{{ $t(`home.why.items.${key}.title`) }}</h4>
        <p>{{ $t(`home.why.items.${key}.text`) }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const itemKeys = [
  'market_focus',
  'partner_communication',
  'solution_alignment',
  'long_term_view'
]
</script>

<style lang="scss" scoped>
.why {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: rem(64) fluid(80, 20);
}

.why-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(20);
  margin-top: rem(10);

  @include bp-sm {
    grid-template-columns: 1fr;
  }
}

.why-card {
  display: flex;
  flex-direction: column;
  gap: rem(14);
  padding: fluid(28, 22);
  border-radius: rem(28);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);

  p {
    opacity: 0.72;
  }
}
</style>
