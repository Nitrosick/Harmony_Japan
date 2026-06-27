<template>
  <section class="why content">
    <h2>{{ $t('saf.page.why.title') }}</h2>
    
    <p class="why-text">
      {{ $t('saf.page.why.text') }}
    </p>

    <div class="why-grid">
      <article
        v-for="item in items"
        :key="item.key"
        class="card"
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

.why-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: rem(30);
  margin-top: rem(10);

  @include bp-xl {
    grid-template-columns: repeat(2, 1fr);
  }

  @include bp-sm {
    grid-template-columns: 1fr;
  }
}
</style>
