<template>
  <div id="thanks">
    <main id="main">
      <section class="hero is-fullheight hero--has-image">
        <img
          :src="require(`~/assets/images/IMG_2372.jpeg`)"
          alt="Delcarmen spotting male client with log presses"
          class="hero__image"
        />
        <div class="hero-body has-text-centered content">
          <div class="container">
            <h2 class="title hero__title">
              Thanks for reaching out!
            </h2>
            <p class="subtitle hero__subtitle">
              We'll talk soon
            </p>
            <router-link to="/" class="button">
              <span class="button__span">
                Go home
              </span>
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Thanks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex,follow'
        }
      ]
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
</style>
