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

      <h1 class="hero-title">Search Anywhere Framework</h1>
      <p class="hero-subtitle">
        Universal monitoring platform for collection, analytics, and visualization of any machine data type
      </p>
      <p class="hero-description">
        Helps IT staff and business users ask questions to corporate machine data and get human-readable answers
      </p>
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
  gap: rem(24);
  width: 100%;
  padding: rem(140) fluid(80, 20) rem(90);
}

.hero-logo {
  width: rem(180);
  height: auto;
}

.hero-title {
  margin: 0;
}

.hero-subtitle {
  margin: 0;
  max-width: rem(980);
  font-size: rem(24);
  line-height: 1.35;
  opacity: 0.88;

  @include bp-md {
    font-size: rem(20);
  }
}

.hero-description {
  max-width: rem(880);
  margin: 0;
  font-size: rem(16);
  line-height: 1.5;
  opacity: 0.78;
}
</style>
