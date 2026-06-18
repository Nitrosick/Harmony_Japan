<template>
  <section class="why content">
    <h2 class="why-title">
      {{ $t('home.why.title') }}
    </h2>

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
const itemKeys = ['market_focus', 'partner_communication', 'solution_alignment', 'long_term_view']
</script>

<style lang="scss" scoped>
.why {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(30);
  margin-top: rem(120);
  padding: 0 fluid(80, 20);
}

.why-title {
  max-width: rem(1280);
  font-size: fluid(60, 36);
  line-height: 1.12;
  text-align: center;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: rem(30);
  width: min(100%, rem(1280));

  @include bp-sm {
    grid-template-columns: 1fr;
  }
}

.why-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: rem(16);
  min-height: rem(236);
  padding: rem(44) rem(32);
  border-radius: rem(32);
  background: radial-gradient(91.71% 91.71% at 100% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(3, 0, 20, 0) 100%);
  border: 1px solid rgba(113, 255, 195, 0.2);
  text-align: center;

  h4 {
    margin: 0;
    font-size: rem(28);
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.4px;
  }

  p {
    margin: 0;
    color: rgba(239, 237, 253, 0.72);
    font-size: rem(22);
    line-height: rem(32);
  }

  &:nth-child(2) {
    background: radial-gradient(100% 100% at 0% 100%, rgba(255, 255, 255, 0.03) 0%, rgba(3, 0, 20, 0) 100%);
  }

  &:nth-child(3) {
    background: radial-gradient(100% 100% at 100% 0%, rgba(255, 255, 255, 0.03) 0%, rgba(3, 0, 20, 0) 100%);
  }

  &:nth-child(4) {
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(3, 0, 20, 0) 100%);
  }
}

@include bp-md {
  .why {
    margin-top: rem(84);
    gap: rem(30);
  }

  .why-card p {
    font-size: rem(20);
    line-height: rem(30);
  }
}

@include bp-sm {
  .why {
    margin-top: rem(68);
  }

  .why-card {
    min-height: rem(212);
    padding: rem(32) rem(20);

    h4 {
      font-size: rem(24);
    }
  }
}
</style>
