<template>
  <FormWrapper
    :label="label"
    :full-width="fullWidth"
    :required="required"
    :error="error"
  >
    <textarea
      v-model.trim="model"
      class="form-textarea"
      :rows="rows"
    />
  </FormWrapper>
</template>

<script setup>
const model = defineModel()

defineProps({
  label: { type: String, default: '' },
  fullWidth: { type: Boolean, default: false },
  withEmpty: { type: Boolean, default: true },
  required: { type: Boolean, default: false },
  error: { type: String, default: '' },
  rows: { type: Number, default: 4 }
})
</script>

<style lang="scss" scoped>
.form-textarea {
  width: 100%;
  min-height: rem(114);
  height: rem(114);
  border-radius: rem(20);
  border: 1px solid rgba(1, 180, 235, 0.1);
  background: rgba(1, 180, 235, 0.1);
  color: $color-text;
  font-family: $font-main;
  font-size: rem(16);
  font-weight: 400;
  line-height: rem(26);
  padding: rem(15) rem(20);
  transition: border-color $transition-time, background-color $transition-time;
  resize: none;

  &:focus {
    border-color: rgba(1, 180, 235, 0.5);
    background: rgba(1, 180, 235, 0.16);
  }
}
</style>
