<template>
  <section class="hero">
    <h1 class="hero-title">
      {{ $t('contact.hero.title') }}
    </h1>
    
    <p class="hero-description">
      {{ $t('contact.hero.description') }}
    </p>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(32);
  max-width: rem(920);
  margin: 0 auto rem(32);
  text-align: center;
}

.hero-title {
  margin: 0;
  font-size: rem(48);
  font-weight: 700;
  line-height: rem(48);
  letter-spacing: -0.4px;
}

.hero-description {
  margin: 0;
  color: var(--color-light-grey);
  font-size: rem(22);
  font-weight: 500;
  line-height: rem(32);

  @include bp-md {
    font-size: rem(20);
    line-height: rem(30);
  }
}

@include bp-md {
  .hero {
    gap: rem(20);
    margin-bottom: rem(24);
  }

  .hero-title {
    font-size: fluid(48, 34);
    line-height: 1.15;
  }
}
</style>
