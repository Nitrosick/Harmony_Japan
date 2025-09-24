<template>
  <footer class="footer">
    <div class="footer-content content">
      <img
        src="/images/logo_2.svg"
        alt="logo"
        class="footer-logo"
        loading="lazy"
        width="271"
        height="21"
      >
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: rem(70) rem(80);
    background: var(--dark-green-gradient);
    background-size: 90% 120%;
    background-position: center rem(110);
    background-repeat: no-repeat;
  }

  &-logo {
    max-width: rem(271);
    max-height: rem(21);
  }
}
</style>
