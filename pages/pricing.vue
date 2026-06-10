<template>
  <div class="pricing-page">
    <PricingHero />
    <PricingEstimator />
  </div>
</template>

<style lang="scss" scoped>
.pricing-page {
  position: relative;
  overflow: hidden;
  padding-bottom: rem(120);
  background-color: #000212;

  > * {
    position: relative;
    z-index: 1;
  }

  &::before,
  &::after {
    position: absolute;
    left: 50%;
    content: '';
    width: rem(1880);
    border-radius: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 0;
  }

  &::before {
    top: rem(-940);
    height: rem(2200);
    background: radial-gradient(
      ellipse at center,
      rgba(5, 71, 64, 0.64) 0%,
      rgba(5, 71, 64, 0.34) 38%,
      rgba(5, 71, 64, 0) 69%
    );
  }

  &::after {
    top: rem(820);
    height: rem(2300);
    background: radial-gradient(
      ellipse at center,
      rgba(7, 78, 99, 0.34) 0%,
      rgba(7, 78, 99, 0.2) 36%,
      rgba(7, 78, 99, 0) 70%
    );
  }

  @include bp-md {
    padding-bottom: rem(88);
  }
}
</style>
