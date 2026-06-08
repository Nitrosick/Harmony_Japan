<template>
  <input
    v-model="model"
    type="text"
    class="form-honeypot"
    tabindex="-1"
    autocomplete="off"
    aria-hidden="true"
  >
</template>

<script setup>
const model = defineModel()
</script>

<style lang="scss" scoped>
.form-honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
</style>
