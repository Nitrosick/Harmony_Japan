<template>
  <section class="strengths content">
    <h2 class="strengths-title">
      {{ $t('home.product_strengths.title') }}
    </h2>

    <div class="strengths-grid">
      <article
        v-for="key in strengthKeys"
        :key="key"
        class="card"
      >
        <h3>{{ $t(`home.product_strengths.items.${key}.title`) }}</h3>

        <p class="description">
          {{ $t(`home.product_strengths.items.${key}.text`) }}
        </p>
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
