<template>
  <!-- <Loader :on="loading" /> -->
  <Main />
  <Description />
  <Projects />
  <Contacts />
</template>

<script setup>
const loading = ref(true)

onMounted(() => loading.value = false)
</script>
