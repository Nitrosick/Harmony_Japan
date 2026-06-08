<template>
  <div class="contact-page">
    <ContactHero />
    <ContactForm />
    <ContactDirect />
  </div>
</template>

<style lang="scss" scoped>
.contact-page {
  position: relative;
  overflow: hidden;
  padding: rem(96) fluid(80, 20) rem(140);
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
    top: rem(-862);
    height: rem(2083);
    background: radial-gradient(
      ellipse at center,
      rgba(7, 63, 61, 0.72) 0%,
      rgba(7, 63, 61, 0.42) 38%,
      rgba(7, 63, 61, 0) 67%
    );
  }

  &::after {
    top: rem(1037);
    height: rem(2582);
    background: radial-gradient(
      ellipse at center,
      rgba(7, 63, 61, 0.62) 0%,
      rgba(7, 63, 61, 0.34) 35%,
      rgba(7, 63, 61, 0) 66%
    );
  }

  @include bp-lg {
    padding-top: rem(72);
    padding-bottom: rem(110);
  }

  @include bp-md {
    padding-top: rem(56);
    padding-bottom: rem(84);
  }
}
</style>
