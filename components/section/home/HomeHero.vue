<template>
  <section class="hero">
    <Motion
      class="hero-background"
      :initial="{ scale: 1.08 }"
      :animate="{ scale: 1, transition: { duration: 8 } }"
    />

    <div class="hero-content content">
      <p class="hero-eyebrow">
        {{ $t('home.hero.eyebrow') }}
      </p>

      <h1>{{ $t('home.hero.title') }}</h1>
      
      <p class="hero-description">
        {{ $t('home.hero.description') }}
      </p>

      <div class="hero-actions">
        <Button
          :text="$t('home.hero.actions.materials')"
          to="/contact"
          :adaptable="false"
        />
        <Button
          :text="$t('home.hero.actions.demo')"
          to="/contact"
        />
        <Button
          :text="$t('home.hero.actions.pricing')"
          to="/pricing"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(0, 2, 18, 0.45), rgba(0, 2, 18, 0.88)),
    url('/images/bg_1.webp') center/cover no-repeat;
  transform-origin: 50% 100%;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(24);
  width: 100%;
  padding: rem(130) fluid(80, 20) rem(80);
}

.hero-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.68;
}

.hero-description {
  max-width: rem(900);
  margin: 0;
  opacity: 0.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
  margin-top: rem(8);
}
</style>
