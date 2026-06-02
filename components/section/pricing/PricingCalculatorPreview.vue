<template>
  <section
    id="calculator-preview"
    class="preview content"
  >
    <p class="preview-eyebrow">
      {{ $t('pricing.calculator_preview.eyebrow') }}
    </p>
    <h2>{{ $t('pricing.calculator_preview.title') }}</h2>
    <p class="preview-text">
      {{ $t('pricing.calculator_preview.text') }}
    </p>
    <p class="preview-note">
      {{ $t('pricing.calculator_preview.note') }}
    </p>

    <div class="preview-actions">
      <Button
        :text="$t('pricing.calculator_preview.actions.request_quote')"
        to="/contact?inquiry=Pricing"
        :adaptable="false"
      />
      <Button
        :text="$t('pricing.calculator_preview.actions.discuss_pricing')"
        to="/contact?inquiry=Pricing"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.preview {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.preview-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.preview-text,
.preview-note {
  max-width: rem(980);
  margin: 0;
  opacity: 0.76;
}

.preview-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
  margin-top: rem(8);
}
</style>
