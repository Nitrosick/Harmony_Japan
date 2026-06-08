<template>
  <FormWrapper
    :label="label"
    :full-width="fullWidth"
    :required="required"
    :error="error"
  >
    <select
      v-model="model"
      class="form-select"
    >
      <option
        v-if="withEmpty"
        value=""
      />
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
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
  options: { type: Array, default: () => [] }
})
</script>

<style lang="scss" scoped>
.form-select {
  width: 100%;
  height: rem(56);
  border-radius: rem(20);
  border: 1px solid rgba(1, 180, 235, 0.1);
  background-color: rgba(1, 180, 235, 0.1);
  background-image:
    linear-gradient(45deg, transparent 50%, var(--color-light-grey) 50%),
    linear-gradient(135deg, var(--color-light-grey) 50%, transparent 50%);
  background-position:
    calc(100% - #{rem(24)}) calc(50% - #{rem(4)}),
    calc(100% - #{rem(18)}) calc(50% - #{rem(4)});
  background-size: rem(6) rem(6), rem(6) rem(6);
  background-repeat: no-repeat;
  color: $color-text;
  font-family: $font-main;
  font-size: rem(16);
  font-weight: 400;
  line-height: rem(26);
  padding: 0 rem(44) 0 rem(20);
  appearance: none;
  transition: border-color $transition-time, background-color $transition-time;

  &:focus {
    border-color: rgba(1, 180, 235, 0.5);
    background: rgba(1, 180, 235, 0.16);
  }
}

@include bp-sm {
  .form-select {
    font-size: rem(15);
  }
}
</style>
