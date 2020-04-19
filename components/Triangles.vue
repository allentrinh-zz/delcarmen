<template>
  <div class="triangles" :class="offWhite"></div>
</template>

<script>
export default {
  props: {
    modifier: {
      type: String,
      default: '',
      validator(value) {
        // The value must match one of these strings
        return ['', 'off-white'].includes(value)
      }
    }
  },
  computed: {
    offWhite() {
      return this.modifier === 'off-white' ? 'triangles--off-white' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.triangles {
  @media (min-width: $widescreen) {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    &::before {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 150px 0 0 50vw;
      border-color: transparent transparent transparent #fff;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 150px 50vw;
      border-color: transparent transparent #fff transparent;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  &--off-white {
    &::before {
      border-color: transparent transparent transparent #fafafa;
    }
    &::after {
      border-color: transparent transparent #fafafa transparent;
    }
  }
}
</style>
