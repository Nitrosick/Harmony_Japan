<template>
  <div class="why-container">
    <div
      id="why-saf"
      class="why content"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="why-item"
        :class="{
          'glass-card': !item.onlyTitle,
          'only-title': item.onlyTitle
        }"
      >
        <img
          v-if="!item.onlyTitle"
          :src="`/icons/${item.icon}.svg`"
          :alt="item.icon"
          loading="lazy"
          width="48"
          height="48"
        >
        <h4>
          {{ $t(`saf.why.titles[${item.id - 1}]`) }}
        </h4>
        <p
          v-if="!item.onlyTitle"
          class="why-item-description"
          v-html="$t(`saf.why.descriptions[${item.id - 1}]`)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  { id: 1, icon: 'saf' },
  { id: 2, icon: 'network' },
  { id: 3, onlyTitle: true },
  { id: 4, icon: 'bubble-chart' },
  { id: 5, icon: 'flow' },
  { id: 6, icon: 'filter' }
]
</script>

<style lang="scss" scoped>
.why-container {
  background: var(--dark-green-gradient);
  background-size: 100vh 100vh;
  background-position: 5vw -10vh;
  background-repeat: no-repeat;
}

.why {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: rem(24);
  padding: fluid(120, 80) fluid(80, 20);

  @include bp-lg {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @include bp-md {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
  }

  &-item {
    display: flex;
    flex-direction: column;
    gap: fluid(32, 24);
    padding: fluid(32, 24);

    &-description {
      opacity: 0.4;
    }
  }

  @include bp-sm {
    padding: 0;
  }
}

.glass-card {
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: fluid(32, 24);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(255, 255, 255, 0.03),
    inset 0 0 0px 0px rgba(255, 255, 255, 0),
    inset 0 2px 12px rgba(255, 255, 255, 0.07);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
}

.glass-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3), transparent, rgba(255, 255, 255, 0.1));
}

.only-title {
  align-items: center;
  justify-content: center;

  h4 {
    font-weight: 700;
    font-size: fluid(60, 30);
    line-height: 1.2;
    letter-spacing: -0.4px;
  }
}
</style>
