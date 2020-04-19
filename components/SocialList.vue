<template>
  <div class="social">
    <ul
      class="social__list"
      :class="`social__list--${this.$props.orientation}`"
    >
      <li
        v-for="social in $store.state.social"
        :key="social.platform"
        class="social__list-item"
      >
        <a :href="social.to" class="social__link" target="_blank">
          <span class="social__icon mdi" :class="social.icon"></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    orientation: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.social {
  &__list {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    &--horizontal {
      align-items: center;
    }
    &--vertical {
    }
  }
  &__list-item {
    list-style: none;
  }
  &__link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    font-size: 1.5rem;
    color: #fff;
    width: 53px;
    height: 53px;
    color: #fff;
    @include transition;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: 50%;
      opacity: 0;
      transform: scale(0);
      @include transition;
    }
    &:hover,
    &:focus {
      color: $primaryColor;
      outline: 0;
      &::before {
        opacity: 1;
        transform: scale(0.75);
      }
    }
  }
  &__icon {
    position: relative;
  }
}
</style>
