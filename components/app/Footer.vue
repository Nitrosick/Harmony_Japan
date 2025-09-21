<template>
  <footer class="footer">
    <div class="author">
      <div class="name caption">Nikita Buzhinskiy</div>
      <div class="caption">A Frontend Developer</div>
    </div>
    <Logo class="logo" />
    <Social class="social-desktop" />
    <Social class="social-mobile" :minimized="true" />
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $unit;
  padding-top: $unit;
  line-height: 1.5;

  @include bp-md {
    padding-top: 0;
  }
}

.author {
  @include bp-md {
    display: none;
  }
}

.logo {
  display: none;

  @include bp-md {
    display: inline-block;
  }
}

.name {
  font-weight: 700;
}

.social-desktop {
  @include bp-sm {
    display: none;
  }
}

.social-mobile {
  display: none;

  @include bp-sm {
    display: flex;
  }
}
</style>
