<template>
  <div
    id="saf-features"
    class="features content"
  >
    <h2>{{ $t('saf.features.title') }}</h2>
    <p
      class="features-description"
      v-html="$t('saf.features.description')"
    />
    <div class="features-tabs">
      <button
        v-for="num in count"
        :key="num"
        class="features-tabs-item"
        :class="{ 'tab-active': currentTab === num }"
        @click.prevent="currentTab = num"
      >
        {{ $t(`saf.features.titles[${num - 1}]`) }}
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
            :src="`/images/saf/feature_${currentTab}.webp`"
            alt="SAF feature"
            loading="lazy"
            width="520"
            height="400"
            @error="onImgError"
          >
        </div>
      </Motion>
      <Motion
        :key="currentTab"
        :initial="motionInitial"
        :while-in-view="motionInView"
      >
        <div class="features-content-text">
          <h3>{{ $t(`saf.features.titles[${currentTab - 1}]`) }}</h3>
          <p
            class="features-content-description"
            v-html="$t(`saf.features.descriptions[${currentTab - 1}]`)"
          />
        </div>
      </Motion>
    </div>
  </div>
</template>

<script setup>
const count = 12
const currentTab = ref(1)

const motionInitial = { x: 30, opacity: 0 }
const motionInView = { x: 0, opacity: 1, transition: { duration: 2, ease: 'easeInOut' } }

const onImgError = (event) => {
  event.target.src = '/images/saf/feature_1.webp'
}
</script>

<style lang="scss" scoped>
.features {
  padding: 0 fluid(80, 20);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(40);

  &-description {
    opacity: 0.4;
    text-align: center;
    max-width: rem(1024);
  }

  &-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: fluid(8, 16);
    margin-top: rem(32);

    &-item {
      padding: rem(4) rem(20);
      font-weight: 400;
      font-size: fluid(20, 16);
      line-height: 1.2;
      color: $color-text;
      border-bottom: 1px solid transparent;
      opacity: 0.4;
      transition: opacity $transition-time, border-bottom-color $transition-time;

      &:hover {
        opacity: 1;
      }
    }

    .tab-active {
      opacity: 1;
      border-bottom-color: $color-text;
      pointer-events: none;
    }
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: fluid(40, 20);
    height: rem(400);
    margin-top: rem(20);

    @include bp-md {
      flex-direction: column;
      height: auto;
    }

    &-image {
      img {
        object-fit: contain;

        @include bp-md {
          width: 100%;
          height: auto;
        }
      }
    }

    &-text {
      display: flex;
      flex-direction: column;
      gap: rem(28);
    }

    &-description {
      max-width: rem(460);
      min-width: rem(200);
    }
  }
}
</style>
