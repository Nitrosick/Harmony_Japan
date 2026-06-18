<template>
  <section class="use-cases content">
    <h2 class="use-cases-title">
      {{ $t('home.use_cases.title') }}
    </h2>
    <p class="use-cases-text">
      {{ $t('home.use_cases.text') }}
    </p>

    <div class="use-cases-grid">
      <article
        v-for="key in caseKeys"
        :key="key"
        class="use-cases-card"
      >
        <h4>{{ $t(`home.use_cases.items.${key}.title`) }}</h4>
        <p>{{ $t(`home.use_cases.items.${key}.text`) }}</p>
      </article>
    </div>

    <Button
      :text="$t('home.use_cases.cta')"
      to="/use-cases"
      :adaptable="false"
      class="use-cases-button"
    />
  </section>
</template>

<script setup>
const caseKeys = ['security_operations', 'observability', 'incident_investigation', 'compliance_visibility']
</script>

<style lang="scss" scoped>
.use-cases {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(30);
  margin-top: rem(120);
  padding: 0 fluid(80, 20);

  &-button {
    margin-top: rem(24);
  }
}

.use-cases-title {
  max-width: rem(1280);
  font-size: fluid(60, 36);
  line-height: 1.12;
  text-align: center;
}

.use-cases-text {
  max-width: rem(1024);
  margin: 0;
  color: var(--color-light-grey);
  font-size: rem(22);
  line-height: rem(32);
  text-align: center;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: rem(30);
  width: min(100%, rem(1280));
  margin: rem(30) 0 0;

  @include bp-lg {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.use-cases-card {
  display: flex;
  flex-direction: column;
  gap: rem(16);
  justify-content: flex-start;
  min-height: rem(432);
  padding: fluid(44, 32) fluid(40, 32);
  border-radius: rem(32);
  background: linear-gradient(180deg, rgba(5, 47, 50, 0.4) 39.82%, rgba(13, 36, 50, 0.1) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 rem(4) rem(4) rgba(0, 0, 0, 0.25);

  h4 {
    margin: 0;
    font-size: fluid(28, 24);
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.4px;
  }

  p {
    margin: 0;
    color: var(--color-light-grey);
    font-size: fluid(22, 18);
    line-height: fluid(32, 24);
    opacity: 0.95;
  }
}

:deep(.button) {
  width: rem(340);
  min-height: rem(72);
  align-self: center;
  border-radius: rem(24);
  padding: rem(19) rem(20);
  font-size: rem(20);
  line-height: rem(22);
}

@include bp-md {
  .use-cases {
    margin-top: rem(84);
    gap: rem(30);
  }

  .use-cases-text {
    font-size: rem(20);
    line-height: rem(30);
  }
}

@include bp-sm {
  .use-cases {
    margin-top: rem(68);
  }

  .use-cases-grid {
    margin-top: rem(24);
  }

  .use-cases-card {
    min-height: rem(360);
    padding: rem(32) rem(20);

    h4 {
      font-size: rem(24);
    }
  }

  .use-cases-text {
    font-size: rem(18);
    line-height: rem(28);
  }

  :deep(.button) {
    width: 100%;
    min-height: rem(64);
    font-size: rem(18);
  }
}
</style>
