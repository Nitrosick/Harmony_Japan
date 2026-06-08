<template>
  <FormWrapper
    :label="label"
    :full-width="fullWidth"
    :required="required"
    :error="error"
  >
    <input
      v-model.trim="model"
      :type="type"
      :required="required"
      class="form-input"
    >
  </FormWrapper>
</template>

<script setup>
const model = defineModel()

defineProps({
  label: { type: String, default: '' },
  fullWidth: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  error: { type: String, default: '' },
  type: { type: String, default: 'text' }
})
</script>

<style lang="scss" scoped>
.form-input {
  width: 100%;
  height: rem(56);
  border-radius: rem(20);
  border: 1px solid rgba(1, 180, 235, 0.1);
  background: rgba(1, 180, 235, 0.1);
  color: $color-text;
  font-family: $font-main;
  font-size: rem(16);
  font-weight: 400;
  line-height: rem(26);
  padding: 0 rem(20);
  transition: border-color $transition-time, background-color $transition-time;

  &:focus {
    border-color: rgba(1, 180, 235, 0.5);
    background: rgba(1, 180, 235, 0.16);
  }
}

@include bp-sm {
  .form-input {
    font-size: rem(15);
  }
}
</style>
