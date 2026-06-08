<template>
  <section class="use-cases content">
    <p class="use-cases-eyebrow">
      {{ $t('home.use_cases.eyebrow') }}
    </p>

    <h2>{{ $t('home.use_cases.title') }}</h2>
    
    <p class="use-cases-text">
      {{ $t('home.use_cases.text') }}
    </p>

    <div class="use-cases-grid">
      <article
        v-for="key in caseKeys"
        :key="key"
        class="use-cases-card"
      >
        <h4>{{ $t(`home.use_cases.items.${key}.title`) }}</h4>
        <p>{{ $t(`home.use_cases.items.${key}.text`) }}</p>
      </article>
    </div>

    <Button
      :text="$t('home.use_cases.cta')"
      to="/use-cases"
      :adaptable="false"
    />
  </section>
</template>

<script setup>
const caseKeys = ['security_operations', 'observability', 'incident_investigation', 'compliance_visibility']
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
  margin: rem(10) 0 rem(6);

  @include bp-sm {
    grid-template-columns: 1fr;
  }
}

.use-cases-card {
  display: flex;
  flex-direction: column;
  gap: rem(14);
  padding: fluid(28, 22);
  border-radius: rem(28);
  background: var(--card-bg-gradient);

  p {
    opacity: 0.72;
  }
}
</style>
