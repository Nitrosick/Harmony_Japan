<template>
  <section class="faq content">
    <p class="faq-eyebrow">
      {{ $t('saf.page.faq.eyebrow') }}
    </p>
    <h2>{{ $t('saf.page.faq.title') }}</h2>

    <div class="faq-list">
      <details
        v-for="key in faqKeys"
        :key="key"
        class="faq-item"
      >
        <summary>{{ $t(`saf.page.faq.items.${key}.question`) }}</summary>
        <p>{{ $t(`saf.page.faq.items.${key}.answer`) }}</p>
      </details>
    </div>
  </section>
</template>

<script setup>
const faqKeys = ['what_is_saf', 'where_value_comes_from', 'what_harmony_does', 'is_pricing_public']
</script>

<style lang="scss" scoped>
.faq {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: rem(64) fluid(80, 20);
}

.faq-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: rem(14);
  margin-top: rem(8);
}

.faq-item {
  padding: rem(22) rem(24);
  border-radius: rem(24);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);

  summary {
    cursor: pointer;
    font-weight: 600;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  p {
    margin: rem(14) 0 0;
    opacity: 0.72;
  }
}
</style>
