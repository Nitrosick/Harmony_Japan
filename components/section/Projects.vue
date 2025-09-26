<template>
  <div
    id="services"
    class="projects content"
  >
    <h2 class="projects-title">
      {{ $t('projects.title') }}
    </h2>
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :data="project"
    />
  </div>
</template>

<script setup>
const projects = [
  { id: 1, image: 'saf', contain: true, bg: 'bg_2.webp' },
  { id: 2, image: 'eventico' },
  { id: 3, image: 'custom' }
]
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(60);
  padding: 0 fluid(80, 20);

  &-title {
    text-align: center;
    max-width: rem(800);
  }

  @include bp-sm {
    padding: 0;
  }
}
</style>
