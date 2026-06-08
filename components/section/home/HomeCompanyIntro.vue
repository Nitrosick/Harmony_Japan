<template>
  <section class="company-intro content">
    <h2 class="company-intro-title">
      {{ $t('home.company_intro.title') }}
    </h2>
    <p class="company-intro-text">
      {{ $t('home.company_intro.text') }}
    </p>
  </section>
</template>

<style lang="scss" scoped>
.company-intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(24);
  margin-top: rem(100);
  padding: 0 fluid(80, 20);
}

.company-intro-title {
  max-width: rem(950);
  font-size: fluid(60, 36);
  line-height: 1.12;
}

.company-intro-text {
  max-width: rem(1040);
  margin: 0;
  color: var(--color-light-grey);
  font-size: rem(22);
  line-height: rem(32);
  opacity: 0.95;
}

@include bp-md {
  .company-intro {
    margin-top: rem(76);
    gap: rem(20);
  }

  .company-intro-text {
    font-size: rem(20);
    line-height: rem(30);
  }
}

@include bp-sm {
  .company-intro {
    margin-top: rem(60);
  }

  .company-intro-text {
    font-size: rem(18);
    line-height: rem(28);
  }
}
</style>
