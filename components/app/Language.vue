<template>
  <div class="language">
    <Icon name="flag" />
    <select
      id="language"
      v-model="l"
      class="language-select"
    >
      <option value="en">English</option>
      <option value="ja">Japanese</option>
    </select>
  </div>
</template>

<script setup>
const { setLocale, locale } = useI18n()
const l = ref('en')
l.value = locale.value ?? 'en'
watch(l, (value) => { setLocale(value) })
</script>

<style lang="scss" scoped>
.language {
  padding-left: rem(20);
  display: flex;
  align-items: center;

  &-select {
    height: rem(40);
    padding-right: rem(10);
  }
}
</style>
