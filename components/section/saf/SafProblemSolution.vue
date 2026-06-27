<template>
  <section class="problem-solution content">    
    <h2 v-html="$t('saf.page.problem_solution.title')" />

    <div class="problem-solution-grid">
      <article class="card problem-solution-card">
        <h3>{{ $t('saf.page.problem_solution.problem.title') }}</h3>

        <p class="description">
          {{ $t('saf.page.problem_solution.problem.text') }}
        </p>
      </article>

      <article class="card problem-solution-card">
        <h3>{{ $t('saf.page.problem_solution.solution.title') }}</h3>

        <p class="description">
          {{ $t('saf.page.problem_solution.solution.text') }}
        </p>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.problem-solution {
  display: flex;
  flex-direction: column;
  gap: rem(30);
  padding: rem(48) fluid(80, 20) rem(64);
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
  h3 {
    font-size: fluid(36, 32);
  }
}
</style>
