<template>
  <!-- <Loader :on="loading" /> -->
  <Main />
  <!-- <AboutMe />
  <Projects />
  <Contacts />
  <Back /> -->
</template>

<script setup>
const loading = ref(true)

onMounted(() => loading.value = false)
</script>
