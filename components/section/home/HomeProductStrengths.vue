<template>
  <section class="strengths content">
    <h2 class="strengths-title">
      {{ $t('home.product_strengths.title') }}
    </h2>

    <div class="strengths-grid">
      <article
        v-for="key in strengthKeys"
        :key="key"
        class="strengths-card"
      >
        <h3>{{ $t(`home.product_strengths.items.${key}.title`) }}</h3>
        <p>{{ $t(`home.product_strengths.items.${key}.text`) }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const strengthKeys = ['uniqueness', 'technology', 'price']
</script>

<style lang="scss" scoped>
.strengths {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(40);
  margin-top: rem(120);
  padding: 0 fluid(80, 20);
}

.strengths-title {
  max-width: rem(1280);
  font-size: fluid(60, 36);
  line-height: 1.12;
  text-align: center;
}

.strengths-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: rem(30);
  width: min(100%, rem(1280));

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.strengths-card {
  display: flex;
  flex-direction: column;
  gap: rem(16);
  justify-content: flex-start;
  min-height: rem(300);
  padding: rem(36) rem(32);
  border-radius: rem(32);
  background: linear-gradient(180deg, rgba(5, 47, 50, 0.4) 39.82%, rgba(13, 36, 50, 0.1) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 rem(4) rem(4) rgba(0, 0, 0, 0.25);

  h3 {
    margin: 0;
    font-size: rem(32);
    line-height: 1.15;
    letter-spacing: -0.4px;
  }

  p {
    margin: 0;
    color: var(--color-light-grey);
    font-size: rem(22);
    line-height: rem(32);
    opacity: 0.95;
  }
}

@include bp-md {
  .strengths {
    margin-top: rem(84);
    gap: rem(28);
  }

  .strengths-card {
    min-height: rem(252);
    padding: rem(28) rem(24);

    p {
      font-size: rem(20);
      line-height: rem(30);
    }
  }
}

@include bp-sm {
  .strengths {
    margin-top: rem(68);
  }

  .strengths-card p {
    font-size: rem(18);
    line-height: rem(28);
  }
}
</style>
