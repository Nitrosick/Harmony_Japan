<template>
  <div class="layout">
    <Header />
    <main class="layout-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>

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
