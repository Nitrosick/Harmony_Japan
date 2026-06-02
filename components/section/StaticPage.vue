<template>
  <div class="page">
    <section class="page-hero content">
      <p
        v-if="eyebrow"
        class="page-eyebrow"
      >
        {{ eyebrow }}
      </p>
      <h1>{{ t(`${namespace}.hero.title`) }}</h1>
      <p class="page-description">
        {{ t(`${namespace}.hero.description`) }}
      </p>
      <div
        v-if="primaryTo || secondaryTo"
        class="page-actions"
      >
        <Button
          v-if="primaryTo"
          :text="t(`${namespace}.cta.primary`)"
          :to="primaryTo"
          :adaptable="false"
        />
        <Button
          v-if="secondaryTo"
          :text="t(`${namespace}.cta.secondary`)"
          :to="secondaryTo"
        />
      </div>
    </section>

    <section
      v-for="(section, index) in sections"
      :key="`${namespace}-${index}`"
      class="page-section content"
    >
      <h2>{{ section.title }}</h2>
      <p
        v-if="section.text"
        class="page-section-text"
      >
        {{ section.text }}
      </p>
      <ul
        v-if="section.items?.length"
        class="page-list"
      >
        <li
          v-for="item in section.items"
          :key="item"
          class="page-list-item"
        >
          {{ item }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  namespace: { type: String, required: true },
  primaryTo: { type: String, default: null },
  secondaryTo: { type: String, default: null }
})

const { t, tm, te, rt } = useI18n()

const eyebrow = computed(() => (
  te(`${props.namespace}.hero.eyebrow`)
    ? t(`${props.namespace}.hero.eyebrow`)
    : null
))

const sections = computed(() => {
  const value = tm(`${props.namespace}.sections`)
  return Array.isArray(value)
    ? value.map((section) => ({
        title: section?.title ? rt(section.title) : '',
        text: section?.text ? rt(section.text) : '',
        items: Array.isArray(section?.items)
          ? section.items.map((item) => rt(item))
          : []
      }))
    : []
})
</script>

<style lang="scss" scoped>
.page {
  padding-top: rem(130);
}

.page-hero {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(24);
  padding: rem(40) fluid(80, 20) rem(80);
}

.page-eyebrow {
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.page-description,
.page-section-text {
  max-width: rem(860);
  opacity: 0.72;
}

.page-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
  margin-top: rem(8);
}

.page-section {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(56);
}

.page-list {
  display: grid;
  gap: rem(12);
  max-width: rem(860);
  padding-left: rem(20);
  margin: 0;
  opacity: 0.8;
}

.page-list-item {
  line-height: 1.5;
}
</style>
