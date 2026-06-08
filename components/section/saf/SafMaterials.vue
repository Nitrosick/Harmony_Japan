<template>
  <section class="materials content">
    <p class="materials-eyebrow">
      {{ $t('saf.page.materials.eyebrow') }}
    </p>

    <h2>{{ $t('saf.page.materials.title') }}</h2>

    <p class="materials-text">
      {{ $t('saf.page.materials.text') }}
    </p>

    <div class="materials-list">
      <article
        v-for="key in materialKeys"
        :key="key"
        class="materials-item"
      >
        <h3>{{ $t(`saf.page.materials.items.${key}.title`) }}</h3>
        <p>{{ $t(`saf.page.materials.items.${key}.text`) }}</p>
      </article>
    </div>

    <Button
      :text="$t('saf.page.materials.cta')"
      to="/contact"
      :adaptable="false"
    />
  </section>
</template>

<script setup>
const materialKeys = [
  'overview',
  'use_case_pack',
  'partner_discussion'
]
</script>

<style lang="scss" scoped>
.materials {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: rem(64) fluid(80, 20);
}

.materials-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.materials-text {
  max-width: rem(920);
  margin: 0;
  opacity: 0.72;
}

.materials-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(20);
  margin-top: rem(10);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.materials-item {
  display: flex;
  flex-direction: column;
  gap: rem(14);
  padding: fluid(30, 22);
  border-radius: rem(28);
  background: var(--card-bg-gradient);

  p {
    margin: 0;
    opacity: 0.72;
  }
}
</style>
