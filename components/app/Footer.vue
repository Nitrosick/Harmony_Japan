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
      <p class="footer-description">
        {{ $t('footer.description') }}
      </p>
      <nav class="footer-links">
        <NuxtLink
          v-for="item in links"
          :key="item.key"
          :to="localePath(item.to)"
          class="footer-link"
        >
          {{ $t(`nav.${item.key}`) }}
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()

const links = [
  { key: 'saf', to: '/saf' },
  { key: 'partners', to: '/partners' },
  { key: 'pricing', to: '/pricing' },
  { key: 'contact', to: '/contact' }
]
</script>

<style lang="scss" scoped>
.footer {
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: rem(20);
    padding: fluid(70, 45) fluid(80, 20);
    background: var(--dark-green-gradient);
    background-size: 90% 120%;
    background-position: center fluid(110, 20);
    background-repeat: no-repeat;
  }

  &-logo {
    max-width: fluid(271, 188);
    max-height: fluid(21, 13);
  }

  &-description {
    max-width: rem(700);
    margin: 0;
    text-align: center;
    opacity: 0.7;
  }

  &-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: rem(20);
  }

  &-link {
    font-size: rem(16);
    opacity: 0.8;
    transition: opacity $transition-time;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
}
</style>
