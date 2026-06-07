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
  </section>
</template>

<style lang="scss" scoped>
.problem-solution {
  display: flex;
  flex-direction: column;
  gap: rem(20);
  padding: rem(48) fluid(80, 20) rem(64);
}

.problem-solution-eyebrow {
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
</style>
