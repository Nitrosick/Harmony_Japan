<template>
  <div
    id="contacts"
    class="contacts"
  >
    <div class="contacts-content content">
      <h2>{{ $t('contacts.title') }}</h2>
      <p
        class="contacts-description"
        v-html="$t('contacts.description')"
      />
      <a
        href="mailto:info@harmonytec.jp"
        class="contacts-mail"
      >
        info@harmonytec.jp
      </a>
      <img
        src="/public/images/qr.svg"
        alt="qr code"
        class="contacts-qr"
        loading="lazy"
        width="160"
        height="160"
      >
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contacts {
  padding: rem(80) fluid(80, 20);
  background: var(--dark-green-gradient);
  background-size: 130% 150%;
  background-position: center -25%;
  background-repeat: no-repeat;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(40);
  }

  &-description {
    opacity: 0.4;
    text-align: center;
    max-width: rem(800);
  }

  &-mail {
    font-weight: 700;
    font-size: fluid(48, 26);
    line-height: 1.3;
    letter-spacing: -0.4px;
  }

  &-qr {
    max-width: rem(160);
    max-height: rem(160);
  }
}
</style>
