<template>
  <section class="hero is-fullheight hero--has-image">
    <img :src="src" :alt="alt" class="hero__image" />
    <div class="hero-body has-text-centered content">
      <div class="container">
        <h1 class="title hero__title">
          {{ title }}
        </h1>
        <h2 v-if="subtitle.length" class="subtitle hero__subtitle">
          {{ subtitle }}
        </h2>
        <router-link
          v-if="$nuxt.$route.name === 'index'"
          to="programs"
          class="button"
        >
          <span class="button__span">
            Find a program
          </span>
        </router-link>
      </div>
    </div>
    <Triangles />
    <button class="scroll" @click="autoScroll">
      <span class="mdi mdi-arrow-down-bold-hexagon-outline scroll__icon"></span>
    </button>
  </section>
</template>

<script>
import Triangles from '~/components/Triangles.vue'

export default {
  components: {
    Triangles
  },
  props: {
    src: {
      type: String,
      default: require('~/assets/images/IMG_7704.jpeg')
    },
    alt: {
      type: String,
      default: 'Andrew Delcarmen spotting a squatter'
    },
    title: {
      type: String,
      default: 'Proven Personal Training'
    },
    subtitle: {
      type: String,
      default: 'Building better individuals since 2010'
    }
  },
  methods: {
    autoScroll() {
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: this.$el.offsetHeight
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.hero {
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.35);
  }
  &--has-image {
    position: relative;
    overflow: hidden;
  }
  &__image {
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  &__title {
    font-size: 2rem;
    color: #fff;
    font-family: $heading;
    font-style: italic;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    @media (min-width: $desktop) {
      font-size: 3rem;
    }
  }
  &__subtitle {
    font-size: 1.5rem;
    color: #fff;
    font-family: $heading;
    font-style: italic;
    font-weight: 400;
    @media (min-width: $desktop) {
      font-size: 2.5rem;
    }
  }
}

.scroll {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: 0;
  scroll-behavior: smooth;
  &__icon {
    color: #fff;
    font-size: 3.5rem;
  }
}
</style>
