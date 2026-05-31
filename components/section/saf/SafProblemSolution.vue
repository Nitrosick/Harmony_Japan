<template>
  <section class="problem-solution content">
    <p class="problem-solution-eyebrow">
      {{ $t('saf.page.problem_solution.eyebrow') }}
    </p>
    <h2>{{ $t('saf.page.problem_solution.title') }}</h2>

    <div class="problem-solution-grid">
      <article class="problem-solution-card">
        <h3>{{ $t('saf.page.problem_solution.problem.title') }}</h3>
        <p>{{ $t('saf.page.problem_solution.problem.text') }}</p>
      </article>

      <article class="problem-solution-card">
        <h3>{{ $t('saf.page.problem_solution.solution.title') }}</h3>
        <p>{{ $t('saf.page.problem_solution.solution.text') }}</p>
      </article>
    </div>

    <div class="problem-solution-audiences">
      <p class="problem-solution-audiences-label">
        {{ $t('saf.page.problem_solution.audience_label') }}
      </p>
      <div class="problem-solution-audiences-list">
        <span
          v-for="key in audienceKeys"
          :key="key"
          class="problem-solution-audience"
        >
          {{ $t(`saf.page.problem_solution.audiences.${key}`) }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const audienceKeys = ['enterprises', 'system_integrators', 'msp_mssp', 'technology_partners']
</script>

<style lang="scss" scoped>
.problem-solution {
  display: flex;
  flex-direction: column;
  gap: rem(20);
  padding: rem(48) fluid(80, 20) rem(64);
}

.problem-solution-eyebrow,
.problem-solution-audiences-label {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.problem-solution-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(20);

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.problem-solution-card {
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

.problem-solution-audiences {
  display: flex;
  flex-direction: column;
  gap: rem(14);
  margin-top: rem(8);
}

.problem-solution-audiences-list {
  display: flex;
  flex-wrap: wrap;
  gap: rem(12);
}

.problem-solution-audience {
  padding: rem(10) rem(16);
  border-radius: rem(999);
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
</style>
