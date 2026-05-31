<template>
  <section class="final-cta">
    <div class="final-cta-content content">
      <h2>{{ $t('home.final_cta.title') }}</h2>
      <p class="final-cta-text">
        {{ $t('home.final_cta.text') }}
      </p>
      <div class="final-cta-actions">
        <Button
          :text="$t('home.final_cta.primary_cta')"
          to="/contact"
          :adaptable="false"
        />
        <Button
          :text="$t('home.final_cta.secondary_cta')"
          to="/pricing"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.final-cta {
  padding: rem(64) fluid(80, 20) rem(96);
}

.final-cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(20);
  text-align: center;
  padding: fluid(44, 28);
  border-radius: rem(32);
  background:
    radial-gradient(circle at top, rgba(3, 252, 146, 0.18), transparent 60%),
    var(--dark-green-gradient);
}

.final-cta-text {
  max-width: rem(840);
  margin: 0;
  opacity: 0.78;
}

.final-cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: rem(16);
}
</style>
