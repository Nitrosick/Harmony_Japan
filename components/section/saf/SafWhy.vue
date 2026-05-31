<template>
  <section class="why content">
    <p class="why-eyebrow">
      {{ $t('saf.page.why.eyebrow') }}
    </p>
    <h2>{{ $t('saf.page.why.title') }}</h2>
    <p class="why-text">
      {{ $t('saf.page.why.text') }}
    </p>

    <div class="why-grid">
      <article
        v-for="item in items"
        :key="item.key"
        class="why-card"
      >
        <img
          :src="`/icons/${item.icon}.svg`"
          :alt="item.key"
          loading="lazy"
          width="48"
          height="48"
        >
        <h3>{{ $t(`saf.page.why.items.${item.key}.title`) }}</h3>
        <p>{{ $t(`saf.page.why.items.${item.key}.text`) }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const items = [
  { key: 'distributed_data', icon: 'saf' },
  { key: 'faster_investigation', icon: 'flow' },
  { key: 'cross_domain_visibility', icon: 'network' },
  { key: 'phased_adoption', icon: 'bubble-chart' }
]
</script>

<style lang="scss" scoped>
.why {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: rem(96) fluid(80, 20) rem(64);
}

.why-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.why-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: rem(20);
  margin-top: rem(10);

  @include bp-xl {
    grid-template-columns: repeat(2, 1fr);
  }

  @include bp-sm {
    grid-template-columns: 1fr;
  }
}

.why-card {
  display: flex;
  flex-direction: column;
  gap: rem(16);
  padding: fluid(30, 22);
  border-radius: rem(28);
  background: var(--card-bg-gradient);

  p {
    margin: 0;
    opacity: 0.72;
  }
}
</style>
