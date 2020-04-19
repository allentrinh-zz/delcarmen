<template>
  <header class="header">
    <div class="container is-fluid">
      <div class="columns is-mobile is-vcentered">
        <div class="column is-hidden-mobile is-4-desktop">
          <SocialList />
        </div>
        <div class="column has-text-centered-tablet">
          <Logo @forceCloseNavigation="forceCloseNavigation" />
        </div>
        <div class="column has-text-right">
          <router-link
            to="#"
            class="button consultation is-hidden-touch is-hidden-desktop-only"
            @click.native="forceCloseNavigation"
          >
            <span class="button__span">
              Get your free consultation
            </span>
          </router-link>
          <button
            class="toggle-navigation"
            title="Toggle navigation"
            @click="toggleNavigation"
          >
            <span class="toggle-navigation__span"></span>
            <span class="toggle-navigation__span"></span>
            <span class="toggle-navigation__span"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SocialList from '~/components/SocialList.vue'

export default {
  components: {
    Logo,
    SocialList
  },
  methods: {
    toggleNavigation() {
      this.$emit('toggleNavigation')
    },
    forceCloseNavigation() {
      this.$emit('forceCloseNavigation')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.header {
  padding: 0.75rem 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
  @include gradient;
  @media (min-width: $desktop) {
    position: fixed;
  }
}

.toggle-navigation {
  border: 0;
  background-color: transparent;
  width: 40px;
  height: 40px;
  transform: skew(-7deg);
  @include transition;
  &__span {
    float: right;
    display: block;
    height: 2px;
    background: #fff;
    & + .toggle-navigation__span {
      margin-top: 5px;
    }
    &:nth-child(1) {
      width: 80%;
    }
    &:nth-child(2) {
      width: 60%;
    }
    &:nth-child(3) {
      width: 90%;
    }
  }
  &:hover,
  &:focus {
    background: fade-out($primaryColor, 0.7);
    cursor: pointer;
    .toggle-navigation__span {
      &:nth-child(1) {
        width: 90%;
      }
      &:nth-child(2) {
        width: 85%;
      }
      &:nth-child(3) {
        width: 100%;
      }
    }
  }
}

.consultation {
  margin-right: 1rem;
}
</style>
