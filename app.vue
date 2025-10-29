<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: filter 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  filter: brightness(0);
}
</style>
