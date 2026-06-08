<template>
  <label
    class="form-wrapper"
    :class="{ 'form-wrapper-full': fullWidth }"
  >
    <span
      v-if="label"
      class="form-label"
    >
      <span>{{ label }}</span>
      <span v-if="required">*</span>
    </span>

    <slot />

    <span
      v-if="error"
      class="form-error"
    >
      {{ error }}
    </span>
  </label>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  fullWidth: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  error: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: rem(8);
}

.form-wrapper-full {
  grid-column: 1/-1;
}

.form-label {
  padding: 0 rem(4);
  color: $color-text;
  font-size: rem(16);
  font-weight: 400;
  line-height: rem(26);
}

.form-error {
  color: #f09a9a;
  font-size: rem(14);
  line-height: 1.5;
  padding-left: rem(4);
}

@include bp-sm {
  .form-label {
    font-size: rem(15);
  }
}
</style>
