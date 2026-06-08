<template>
  <label class="form-consent">
    <input
      v-model="model"
      type="checkbox"
      :required="required"
      class="form-consent-input"
    >
    <span
      v-if="label"
      class="form-consent-text"
    >
      {{ label }}
    </span>
  </label>
  <span
    v-if="error"
    class="form-error form-error-consent"
  >
    {{ error }}
  </span>
</template>

<script setup>
const model = defineModel()

defineProps({
  label: { type: String, default: '' },
  required: { type: Boolean, default: false },
  error: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
.form-consent {
  display: flex;
  align-items: flex-start;
  gap: rem(24);
}

.form-consent-input {
  appearance: none;
  display: grid;
  place-content: center;
  width: rem(24);
  height: rem(24);
  margin-top: rem(6);
  border: 2px solid var(--color-light-grey);
  border-radius: rem(6);
  background: transparent;
  flex-shrink: 0;
  cursor: pointer;

  &::before {
    content: '';
    width: rem(10);
    height: rem(10);
    border-radius: rem(2);
    background-color: $color-text;
    transform: scale(0);
    transition: transform $transition-time;
  }

  &:checked {
    border-color: $color-text;
  }

  &:checked::before {
    transform: scale(1);
  }
}

.form-consent-text {
  color: var(--color-light-grey);
  font-size: rem(16);
  font-weight: 400;
  line-height: rem(26);
}

.form-error-consent {
  margin-top: rem(-14);
  padding-left: rem(48);
}

@include bp-md {
  .form-consent {
    gap: rem(16);
  }

  .form-consent-input {
    margin-top: rem(4);
  }
}

@include bp-sm {
  .form-consent-text {
    font-size: rem(15);
  }
}
</style>
