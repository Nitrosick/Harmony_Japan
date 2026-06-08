<template>
  <section class="architecture content">
    <p class="architecture-eyebrow">
      {{ $t('saf.page.architecture.eyebrow') }}
    </p>

    <h2>{{ $t('saf.page.architecture.title') }}</h2>

    <p class="architecture-text">
      {{ $t('saf.page.architecture.text') }}
    </p>

    <div class="architecture-diagram">
      <article
        v-for="key in architectureKeys"
        :key="key"
        class="architecture-column"
      >
        <p class="architecture-column-label">
          {{ $t(`saf.page.architecture.columns.${key}.label`) }}
        </p>

        <h3>{{ $t(`saf.page.architecture.columns.${key}.title`) }}</h3>

        <p>{{ $t(`saf.page.architecture.columns.${key}.text`) }}</p>
      </article>
    </div>

    <p class="architecture-note">
      {{ $t('saf.page.architecture.note') }}
    </p>
  </section>
</template>

<script setup>
const architectureKeys = [
  'sources',
  'saf_layer',
  'outcomes'
]
</script>

<style lang="scss" scoped>
.architecture {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: rem(64) fluid(80, 20);
}

.architecture-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.architecture-text,
.architecture-note {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.architecture-diagram {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(20);
  margin-top: rem(12);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.architecture-column {
  display: flex;
  flex-direction: column;
  gap: rem(12);
  padding: fluid(30, 22);
  border-radius: rem(28);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.08);

  p {
    margin: 0;
    opacity: 0.72;
  }
}

.architecture-column-label {
  font-size: rem(13);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.55;
}
</style>
