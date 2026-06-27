<template>
  <section class="hero">
    <Motion
      class="hero-background"
      :initial="{ scale: 1.12 }"
      :animate="{ scale: 1, transition: { duration: 8 } }"
    />

    <div class="hero-content content">
      <img
        src="/images/saf/logo.svg"
        alt="SAF logo"
        loading="lazy"
        class="hero-logo"
        width="180"
        height="180"
      >

      <h1 class="hero-title">
        Search Anywhere Framework
      </h1>

      <p class="description hero-subtitle">
        Universal monitoring platform for collection, analytics, and visualization of any machine data type.
        Helps IT staff and business users ask questions to corporate machine data and get human-readable answers
      </p>

      <Button
        :text="$t('saf.page.hero.actions.materials')"
        to="/contact"
        :adaptable="false"
        class="hero-content-btn"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: rem(-108);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(0, 3, 20, 0.42), rgba(0, 3, 20, 0.9)),
    url('/images/bg_3.webp') center/cover no-repeat;
  transform-origin: 50% 100%;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: rem(30);
  width: 100%;
  padding: 0 fluid(80, 20);

  &-btn {
    margin-top: rem(24);
  }
}

.hero-logo {
  width: rem(180);
  height: auto;
}

.hero-title {
  margin: 0;
}

.hero-subtitle {
  max-width: rem(980);
}
</style>
