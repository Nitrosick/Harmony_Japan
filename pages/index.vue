<template>
  <!-- <Loader :on="loading" /> -->
  <Main />
  <Description />
  <Projects />
</template>

<script setup>
const loading = ref(true)

onMounted(() => loading.value = false)
</script>
