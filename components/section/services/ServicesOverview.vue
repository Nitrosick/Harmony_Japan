<template>
  <section class="overview content">
    <div class="overview-grid">
      <article
        v-for="key in serviceKeys"
        :key="key"
        class="overview-card"
      >
        <p class="overview-card-label">
          {{ $t(`services.blocks.${key}.label`) }}
        </p>

        <h2>{{ $t(`services.blocks.${key}.title`) }}</h2>

        <p class="overview-card-description">
          {{ $t(`services.blocks.${key}.description`) }}
        </p>

        <p class="overview-card-value-label">
          {{ $t('services.blocks.value_label') }}
        </p>

        <p class="overview-card-value">
          {{ $t(`services.blocks.${key}.value`) }}
        </p>
        
        <Button
          :text="$t(`services.blocks.${key}.cta`)"
          :to="serviceLinks[key]"
          :adaptable="key !== 'saf'"
        />
      </article>
    </div>
  </section>
</template>

<script setup>
const serviceKeys = ['saf', 'development', 'automation']

const serviceLinks = {
  saf: '/saf',
  development: '/services/saf-solution-development',
  automation: '/contact'
}
</script>

<style lang="scss" scoped>
.overview {
  padding: 0 fluid(80, 20) rem(64);
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(20);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.overview-card {
  display: flex;
  flex-direction: column;
  gap: rem(16);
  padding: fluid(32, 22);
  border-radius: rem(28);
  background: var(--card-bg-gradient);
}

.overview-card-label,
.overview-card-value-label {
  margin: 0;
  font-size: rem(13);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.55;
}

.overview-card-description,
.overview-card-value {
  margin: 0;
  opacity: 0.72;
}
</style>
