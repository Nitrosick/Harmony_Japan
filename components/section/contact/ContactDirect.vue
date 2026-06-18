<template>
  <section class="direct">
    <h2 class="direct-title">
      {{ $t('contact.direct.title') }}
    </h2>
    
    <p class="direct-text">
      {{ $t('contact.direct.text') }}
    </p>

    <a
      href="mailto:info@harmonytec.jp"
      class="direct-mail"
    >
      info@harmonytec.jp
    </a>
  </section>
</template>

<style lang="scss" scoped>
.direct {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(32);
  max-width: rem(814);
  margin: rem(144) auto 0;
  text-align: center;
}

.direct-title {
  margin: 0;
  font-size: rem(60);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.4px;
}

.direct-text {
  max-width: rem(814);
  margin: 0;
  color: var(--color-light-grey);
  font-size: rem(22);
  font-weight: 500;
  line-height: rem(32);
}

.direct-mail {
  font-size: rem(48);
  font-weight: 700;
  line-height: rem(48);
  letter-spacing: -0.4px;

  @include bp-md {
    font-size: fluid(48, 34);
    line-height: 1.2;
  }
}

@include bp-md {
  .direct {
    gap: rem(30);
    margin-top: rem(120);
  }

  .direct-title {
    font-size: fluid(60, 40);
  }

  .direct-text {
    font-size: rem(20);
    line-height: rem(30);
  }
}

@include bp-sm {
  .direct {
    margin-top: rem(96);
  }

  .direct-text {
    font-size: rem(18);
    line-height: rem(28);
  }
}
</style>
