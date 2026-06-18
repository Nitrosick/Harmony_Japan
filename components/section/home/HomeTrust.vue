<template>
  <section class="trust content">
    <!-- <p class="trust-eyebrow">
      {{ $t('home.trust.eyebrow') }}
    </p> -->

    <h2>{{ $t('home.trust.title') }}</h2>
    
    <p class="trust-text">
      {{ $t('home.trust.text') }}
    </p>

    <ul class="trust-list">
      <li
        v-for="item in trustItems"
        :key="item"
        class="trust-list-item"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n()

const trustItems = computed(() => {
  const value = tm('home.trust.items')
  return Array.isArray(value)
    ? value.map((item) => rt(item))
    : []
})
</script>

<style lang="scss" scoped>
.trust {
  display: flex;
  flex-direction: column;
  gap: rem(30);
  padding: rem(64) fluid(80, 20);
}

// .trust-eyebrow {
//   margin: 0;
//   font-size: rem(14);
//   font-weight: 700;
//   letter-spacing: 0.12em;
//   text-transform: uppercase;
//   opacity: 0.55;
// }

.trust-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.trust-list {
  display: flex;
  flex-direction: column;
  gap: rem(30);
  padding-left: rem(45);
  list-style: none;
}

.trust-list-item {
  position: relative;
  line-height: rem(28);
  font-weight: 500;

  &::before {
    content: '';
    position: absolute;
    left: rem(-50);
    width: rem(28);
    height: rem(28);
    background-image: url(/icons/marker.svg);
    background-position: center;
  }
}
</style>
