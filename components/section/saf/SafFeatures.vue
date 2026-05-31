<template>
  <section class="features content">
    <p class="features-eyebrow">
      {{ $t('saf.page.modules.eyebrow') }}
    </p>
    <h2>{{ $t('saf.page.modules.title') }}</h2>
    <p class="features-description">
      {{ $t('saf.page.modules.text') }}
    </p>

    <div class="features-tabs">
      <button
        v-for="item in modules"
        :key="item.key"
        class="features-tabs-item"
        :class="{ 'tab-active': currentTab === item.key }"
        @click.prevent="currentTab = item.key"
      >
        {{ $t(`saf.page.modules.items.${item.key}.title`) }}
      </button>
    </div>

    <div class="features-content">
      <Motion
        :key="currentTab"
        :initial="motionInitial"
        :while-in-view="motionInView"
      >
        <div class="features-content-image">
          <img
            :src="currentImage"
            alt="SAF module"
            loading="lazy"
            width="520"
            height="400"
            @error="onImgError"
          >
        </div>
      </Motion>

      <Motion
        :key="`${currentTab}-text`"
        :initial="motionInitial"
        :while-in-view="motionInView"
      >
        <div class="features-content-text">
          <h3>{{ $t(`saf.page.modules.items.${currentTab}.title`) }}</h3>
          <p class="features-content-description">
            {{ $t(`saf.page.modules.items.${currentTab}.text`) }}
          </p>
          <Button
            :text="$t('saf.page.modules.cta')"
            to="/contact"
            :adaptable="false"
          />
        </div>
      </Motion>
    </div>
  </section>
</template>

<script setup>
const modules = [
  { key: 'search', image: '/images/saf/feature_1.webp' },
  { key: 'observability', image: '/images/saf/feature_4.webp' },
  { key: 'security', image: '/images/saf/feature_5.webp' },
  { key: 'incident_response', image: '/images/saf/feature_2.webp' },
  { key: 'compliance', image: '/images/saf/feature_4.webp' },
  { key: 'ai_assisted_analysis', image: '/images/saf/feature_12.webp' }
]

const currentTab = ref(modules[0].key)

const motionInitial = { x: 30, opacity: 0 }
const motionInView = { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } }

const currentImage = computed(() => {
  return modules.find(item => item.key === currentTab.value)?.image || modules[0].image
})

const onImgError = (event) => {
  event.target.src = modules[0].image
}
</script>

<style lang="scss" scoped>
.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(24);
  padding: rem(64) fluid(80, 20);
}

.features-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.features-description {
  max-width: rem(960);
  margin: 0;
  text-align: center;
  opacity: 0.72;
}

.features-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: rem(10);
  margin-top: rem(12);
}

.features-tabs-item {
  padding: rem(10) rem(18);
  border-radius: rem(999);
  border: 1px solid rgba(255, 255, 255, 0.12);
  opacity: 0.65;
  transition: opacity $transition-time, border-color $transition-time, background-color $transition-time;

  &:hover {
    opacity: 1;
  }
}

.tab-active {
  opacity: 1;
  border-color: rgba(255, 255, 255, 0.45);
  background-color: rgba(255, 255, 255, 0.06);
  pointer-events: none;
}

.features-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: fluid(40, 20);
  width: 100%;
  margin-top: rem(12);

  @include bp-md {
    flex-direction: column;
  }
}

.features-content-image img {
  object-fit: contain;

  @include bp-md {
    width: 100%;
    height: auto;
  }
}

.features-content-text {
  display: flex;
  flex-direction: column;
  gap: rem(24);
  max-width: rem(500);
}

.features-content-description {
  margin: 0;
  opacity: 0.72;
}
</style>
