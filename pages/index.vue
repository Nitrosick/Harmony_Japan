<template>
  <div class="home-page">
    <HomeHero />
    <HomeCompanyIntro />
    <HomeUseCases />
    <HomeProductStrengths />
    <HomeWhy />
    <HomeTrust />
    <HomeFinalCta />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  position: relative;
  overflow: hidden;
  background-color: var(--color-dark-blue);

  > * {
    position: relative;
    z-index: 1;
  }

  &::before,
  &::after {
    position: absolute;
    left: 50%;
    content: '';
    width: rem(1840);
    border-radius: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 0;
  }

  &::before {
    top: rem(980);
    height: rem(2000);
    background: radial-gradient(
      ellipse at center,
      rgba(7, 63, 61, 0.65) 0%,
      rgba(7, 63, 61, 0.32) 42%,
      rgba(7, 63, 61, 0) 70%
    );
    filter: blur(rem(40));
    transform: translateX(-50%) scaleY(-1);
  }

  &::after {
    top: rem(3600);
    height: rem(2300);
    background: radial-gradient(
      ellipse at center,
      rgba(7, 63, 61, 0.6) 0%,
      rgba(7, 63, 61, 0.28) 38%,
      rgba(7, 63, 61, 0) 66%
    );
    filter: blur(rem(40));
    transform: translateX(-50%) scaleY(-1);
  }

  @include bp-md {
    &::before,
    &::after {
      width: rem(1420);
    }

    &::before {
      top: rem(860);
    }

    &::after {
      top: rem(3200);
    }
  }
}
</style>
