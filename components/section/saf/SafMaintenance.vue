<template>
  <div
    id="saf-maintenance"
    class="maintenance content"
  >
    <h2>{{ $t('saf.maintenance.title') }}</h2>
    <p
      class="maintenance-description"
      v-html="$t('saf.maintenance.description')"
    />
    <div class="maintenance-content">
      <Motion
        v-for="num in count"
        :key="num"
        :initial="{
          ...getInitialPosition(num),
          opacity: 0
        }"
        :while-in-view="{
          x: 0,
          y: 0,
          opacity: 1,
          transition: { duration: 2, ease: 'easeInOut' }
        }"
        :inViewOptions="{ once: true }"
      >
        <div class="maintenance-content-item">
          <h4>{{ $t(`saf.maintenance.titles[${num - 1}]`) }}</h4>
          <p
            class="maintenance-description"
            v-html="$t(`saf.maintenance.descriptions[${num - 1}]`)"
          />
        </div>
      </Motion>
      <img
        src="/icons/saf.svg"
        alt="SAF"
        loading="lazy"
        class="maintenance-icon"
        width="50"
        height="50"
      >
    </div>
  </div>
</template>

<script setup>
const count = 4

const getInitialPosition = (num) => {
  switch (num) {
    case 1: return { x: -30, y: -30 }
    case 2: return { x: 30, y: -30 }
    case 3: return { x: -30, y: 30 }
    case 4: return { x: 30, y: 30 }
  }
}
</script>

<style lang="scss" scoped>
.maintenance {
  padding: rem(80) fluid(80, 20);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(40);

  &-description {
    opacity: 0.4;
    text-align: center;
  }

  &-content {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background:
      url("/images/bg_4.webp"),
      var(--dark-green-gradient);
    background-position: center calc(50% - rem(15));
    background-size: contain;
    background-repeat: no-repeat, no-repeat;
    max-width: rem(1062);
    margin-top: rem(20);

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: rem(16);
      padding: fluid(52, 26) fluid(32, 16) fluid(82, 41) fluid(32, 16);

      h4 {
        text-align: center;
      }

      .maintenance-description {
        max-width: rem(400);
      }
    }
  }

  &-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
