<template>
  <section class="maintenance content">
    <p class="maintenance-eyebrow">
      {{ $t('saf.page.partner_value.eyebrow') }}
    </p>
    <h2>{{ $t('saf.page.partner_value.title') }}</h2>
    <p class="maintenance-description">
      {{ $t('saf.page.partner_value.text') }}
    </p>

    <div class="maintenance-content">
      <Motion
        v-for="item in items"
        :key="item.key"
        :initial="{ y: 20, opacity: 0 }"
        :while-in-view="{ y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeInOut' } }"
        :inViewOptions="{ once: true }"
      >
        <article class="maintenance-content-item">
          <h3>{{ $t(`saf.page.partner_value.items.${item.key}.title`) }}</h3>
          <p>{{ $t(`saf.page.partner_value.items.${item.key}.text`) }}</p>
        </article>
      </Motion>
    </div>

    <div class="maintenance-actions">
      <Button
        :text="$t('saf.page.pricing_cta.primary_cta')"
        to="/pricing"
        :adaptable="false"
      />
      <Button
        :text="$t('saf.page.pricing_cta.secondary_cta')"
        to="/contact"
      />
    </div>
  </section>
</template>

<script setup>
const items = [
  { key: 'market_context' },
  { key: 'partner_discussions' },
  { key: 'solution_scenarios' },
  { key: 'next_steps' }
]
</script>

<style lang="scss" scoped>
.maintenance {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);
  padding: rem(64) fluid(80, 20);
}

.maintenance-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.maintenance-description {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.maintenance-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(20);
  width: 100%;
  margin-top: rem(12);

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.maintenance-content-item {
  display: flex;
  flex-direction: column;
  gap: rem(14);
  height: 100%;
  padding: fluid(30, 22);
  border-radius: rem(28);
  background: var(--card-bg-gradient);

  p {
    margin: 0;
    opacity: 0.72;
  }
}

.maintenance-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
  margin-top: rem(8);
}
</style>
