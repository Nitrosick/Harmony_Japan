<template>
  <section class="use-cases content">
    <p class="use-cases-eyebrow">
      {{ $t('saf.page.use_cases.eyebrow') }}
    </p>

    <h2>{{ $t('saf.page.use_cases.title') }}</h2>

    <p class="use-cases-text">
      {{ $t('saf.page.use_cases.text') }}
    </p>

    <div class="use-cases-grid">
      <article
        v-for="key in useCaseKeys"
        :key="key"
        class="use-cases-card"
      >
        <h3>{{ $t(`saf.page.use_cases.items.${key}.title`) }}</h3>
        <p>{{ $t(`saf.page.use_cases.items.${key}.text`) }}</p>
      </article>
    </div>

    <Button
      :text="$t('saf.page.use_cases.cta')"
      to="/use-cases"
      :adaptable="false"
    />
  </section>
</template>

<script setup>
const useCaseKeys = [
  'security_operations',
  'observability',
  'incident_investigation',
  'compliance_visibility'
]
</script>

<style lang="scss" scoped>
.use-cases {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: rem(64) fluid(80, 20);
}

.use-cases-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.use-cases-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(20);
  margin-top: rem(10);

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.use-cases-card {
  display: flex;
  flex-direction: column;
  gap: rem(16);
  padding: fluid(30, 22);
  border-radius: rem(28);
  background: var(--card-bg-gradient);

  p {
    margin: 0;
    opacity: 0.72;
  }
}
</style>
