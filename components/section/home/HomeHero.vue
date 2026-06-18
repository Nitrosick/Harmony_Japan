<template>
  <section class="hero">
    <Motion
      class="hero-background"
      :initial="{ scale: 1.08 }"
      :animate="{ scale: 1, transition: { duration: 8 } }"
    />

    <div class="hero-content content">
      <h1 class="hero-title">
        {{ $t('home.hero.title') }}
      </h1>

      <p
        class="hero-description"
        v-html="$t('home.hero.description')"
      />

      <div class="hero-actions">
        <Button
          :text="$t('home.hero.actions.contact')"
          to="/contact"
          :adaptable="false"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: rem(780);
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  padding: rem(110) 0 rem(80);
}

.hero-background {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(180% 130% at 4% 15%, rgba(3, 252, 146, 0.16) 0%, rgba(1, 180, 235, 0.32) 48%, rgba(1, 107, 171, 0.48) 74%, rgba(2, 35, 107, 0.64) 100%),
    linear-gradient(180deg, rgba(0, 13, 41, 0) 0%, rgba(0, 2, 18, 0.44) 82%, rgba(0, 2, 18, 0.68) 90%, #000212 100%),
    url('/images/bg_1.webp') center/cover no-repeat;
  transform-origin: 50% 100%;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: fluid(60, 30);
  width: 100%;
  max-width: rem(1280);
  margin: 0 auto;
  padding: rem(72) fluid(80, 20) 0;
  text-align: center;
}

.hero-title {
  max-width: rem(1000);
  font-size: fluid(72, 44);
  line-height: fluid(70, 48);
  letter-spacing: -1px;
  white-space: nowrap;
}

.hero-description {
  max-width: rem(840);
  margin: 0;
  // color: var(--color-light-grey);
  font-size: fluid(22, 18);
  font-weight: 500;
  line-height: rem(36);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(20);
}

.hero-actions :deep(.button) {
  width: rem(300);
  min-height: rem(72);
  border-radius: rem(24);
  padding: rem(19) rem(20);
  font-size: rem(20);
  line-height: rem(22);
}

@include bp-md {
  .hero {
    min-height: rem(620);
    padding: rem(88) 0 rem(56);
  }

  .hero-content {
    gap: rem(28);
    padding-top: rem(54);
  }

  .hero-title {
    white-space: inherit;
  }

  .hero-description {
    font-size: rem(22);
    line-height: rem(32);
  }
}

@include bp-sm {
  .hero {
    min-height: auto;
    padding: rem(76) 0 rem(44);
  }

  .hero-content {
    gap: rem(22);
    padding-top: rem(42);
  }

  .hero-description {
    font-size: rem(18);
    line-height: rem(28);
  }

  .hero-actions :deep(.button) {
    width: 100%;
    min-height: rem(64);
    font-size: rem(18);
  }
}
</style>
