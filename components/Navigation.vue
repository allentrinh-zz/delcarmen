<template>
  <nav class="navigation" :class="{ 'navigation--open': navigationOpen }">
    <button
      aria-hidden="true"
      class="navigation__link navigation__link--hidden"
    ></button>
    <ul class="navigation__list">
      <li
        v-for="(item, index) in $store.state.navigation"
        :key="index"
        class="navigation__list-item"
      >
        <router-link
          :to="item.to"
          class="navigation__link"
          @click.native="forceCloseNavigation"
        >
          <span class="navigation__link-text">{{ item.text }}</span>
        </router-link>
      </li>
    </ul>
    <img
      src="../assets/images/IMG_2375.jpeg"
      alt="Andrew Delcarmen spotting bench press"
      class="navigation__image"
    />
  </nav>
</template>

<script>
export default {
  props: {
    navigationOpen: Boolean
  },
  methods: {
    forceCloseNavigation() {
      this.$emit('forceCloseNavigation')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.navigation {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 85px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 8;
  transform: translateX(-100%);
  background: darken($primaryColor, 10);
  opacity: 0;
  @include transition;
  &--open {
    transform: translateX(0);
    opacity: 1;
  }
  &__list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: $desktop) {
      padding: 0 6rem;
    }
  }
  &__list-item {
    text-align: center;
  }
  &__link {
    padding: 2rem 0.75rem;
    display: inline-block;
    font-size: 2.25rem;
    color: #fff;
    font-family: $heading;
    font-weight: 700;
    font-style: italic;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 110%;
      height: 45%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: skew(-15deg) translate(-80%, -50%);
      background: #fff;
      opacity: 0;
      @include transition;
    }
    &:hover,
    &:focus {
      color: $primaryColor;
      outline: 0;
      &::before {
        opacity: 1;
        transform: skew(-15deg) translate(-50%, -50%);
      }
    }
    &--hidden {
      opacity: 0;
      border: 0;
      height: 0;
      width: 0;
      padding: 0;
    }
  }
  &__link-text {
    position: relative;
  }
  &__image {
    display: none;
    @media (min-width: $fullhd) {
      display: block;
      object-fit: cover;
    }
  }
}
</style>
