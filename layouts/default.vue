<template>
  <div class="layout">
    <Loader :on="loading" />
    <Header />
    <main class="layout-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const loading = ref(true)

document.body.classList.add('lock-scroll');

onMounted(() => {
  setTimeout(() => {
    loading.value = false
    document.body.classList.remove('lock-scroll');
  }, 500);
})
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  min-width: $min-width;
  display: flex;
  flex-direction: column;

  &-content {
    flex-grow: 1;
  }
}
</style>
