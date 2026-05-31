<template>
  <section class="direct content">
    <p class="direct-eyebrow">
      {{ $t('contact.direct.eyebrow') }}
    </p>
    <h2>{{ $t('contact.direct.title') }}</h2>
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
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(96);
}

.direct-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.direct-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.direct-mail {
  font-size: fluid(36, 24);
  font-weight: 700;
}
</style>
