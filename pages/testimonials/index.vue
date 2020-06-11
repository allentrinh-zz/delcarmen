<template>
  <div id="testimonials">
    <Hero
      title="Testimonials"
      subtitle=""
      :src="require(`~/assets/images/IMG_7703.jpeg`)"
      alt=""
    />
    <main id="main">
      <section class="testimonials section content">
        <div class="container">
          <div class="columns">
            <div
              class="column is-8-desktop is-offset-2-desktop has-text-centered"
            >
              <h2>The results speak for themselves!</h2>
              <p>Check out these clients and their amazing results!</p>
              <img
                v-for="(img, key) in images"
                :key="key"
                :src="img.src"
                :alt="img.alt"
                class="testimonials__image"
              />
              <router-link to="programs" class="button">
                <span class="button__span">
                  Find a program for you!
                </span>
              </router-link>
            </div>
          </div>
        </div>
        <Triangles modifier="off-white" />
      </section>
    </main>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Triangles from '~/components/Triangles.vue'

export default {
  components: {
    Hero,
    Triangles
  },
  data() {
    return {
      images: [
        {
          src: require(`~/assets/images/testimonials/IMG_0164.jpg`),
          alt: 'Female client before and after'
        },
        {
          src: require(`~/assets/images/testimonials/IMG_0165.jpg`),
          alt: 'Male client before and after'
        },
        {
          src: require(`~/assets/images/testimonials/IMG_0166.jpg`),
          alt: 'Female client before and after'
        },
        {
          src: require(`~/assets/images/testimonials/IMG_0167.jpg`),
          alt: 'Male client before and after'
        },
        {
          src: require(`~/assets/images/testimonials/IMG_0168.jpg`),
          alt: 'Male client before and after'
        },
        {
          src: require(`~/assets/images/testimonials/IMG_0170.jpg`),
          alt: 'Female client before and after'
        },
        {
          src: require(`~/assets/images/testimonials/IMG_0171.jpg`),
          alt: 'Female client before and after'
        },
        {
          src: require(`~/assets/images/testimonials/IMG_0179.jpg`),
          alt: 'Female client before and after'
        },
        {
          src: require(`~/assets/images/testimonials/IMG_0181.jpg`),
          alt: 'Female client before and after'
        },
        {
          src: require(`~/assets/images/testimonials/IMG_0182.jpg`),
          alt: 'Female client before and after'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Testimonials',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The results speak for themselves! Check out these clients!'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.testimonials {
  position: relative;
  @media (min-width: $desktop) {
    padding-top: 8rem;
    padding-bottom: 15rem;
  }
  &__image {
    width: 100%;
  }
}
</style>
