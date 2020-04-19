<template>
  <router-link to="/" @click.native="forceCloseNavigation">
    <span class="logo">{{ $store.state.name }}</span>
  </router-link>
</template>

<script>
export default {
  methods: {
    forceCloseNavigation() {
      this.$emit('forceCloseNavigation')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.logo {
  font-size: 1.5rem;
  display: inline-block;
  font-family: $heading;
  font-weight: 700;
  font-style: italic;
  color: #fff;
  line-height: 1;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.35);
  @media (min-width: $desktop) {
    font-size: 2rem;
  }
}
</style>
