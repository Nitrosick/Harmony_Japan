<template>
  <section class="company-intro content">
    <h2 class="company-intro-title">
      {{ $t('home.company_intro.title') }}
    </h2>
    
    <p class="description company-intro-text">
      <span>{{ $t('home.company_intro.text') }}</span>
      <span v-if="locale === 'en'">
        {{ $t('home.company_intro.text_secondary') }}
      </span>
    </p>
  </section>
</template>

<script setup>
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
.company-intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(30);
  margin-top: rem(100);
  padding: 0 fluid(80, 20);
}

.company-intro-title {
  max-width: rem(950);
}

.company-intro-text {
  display: flex;
  flex-direction: column;
  gap: rem(18);
}

@include bp-md {
  .company-intro {
    margin-top: rem(76);
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
