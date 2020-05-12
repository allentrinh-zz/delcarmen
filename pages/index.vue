<template>
  <div id="index">
    <Hero />
    <main id="main">
      <section class="section content has-text-centered how">
        <div class="container">
          <h2 class="how__heading">How it works</h2>
          <p class="how__body">
            {{ tagline }}
          </p>
          <div class="columns">
            <div class="column">
              <div class="bordered-image">
                <img
                  :src="require('~/assets/images/IMG_7707.jpeg')"
                  alt="Andrew Delcarmen instructing a group class"
                  class="bordered-image__image"
                />
              </div>
            </div>
            <div class="column">
              <div class="steps">
                <ol class="steps__list">
                  <li
                    v-for="(step, index) in steps"
                    :key="index"
                    class="steps__list-item"
                  >
                    <span class="steps__number">{{ index + 1 }}.</span>
                    <h3 class="steps__heading">
                      {{ step.heading }}
                    </h3>
                    <p class="steps__body">
                      {{ step.body }}
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <router-link to="/contact" class="button">
            <span class="button__span">Claim your free consultation!</span>
          </router-link>
        </div>
      </section>
      <section v-if="$store.state.posts.length" class="section">
        <div class="container">
          <div class="blog">
            <h2 class="blog__heading">Latest posts</h2>
          </div>
          <div class="blog__latest">
            <router-link
              :to="`/blog/${latestPost.slug}`"
              class="blog__image-link blog__image-link--latest"
            >
              <img
                :src="latestPost.featured_image"
                class="blog__image"
                alt=""
              />
            </router-link>
            <div class="blog__content blog__content--latest">
              <h3 class="blog__title">{{ latestPost.title }}</h3>
              <div class="blog__body-wrapper blog__body-wrapper--latest">
                <p class="blog__body">
                  {{ cleanBody(latestPost.excerpt) }}
                </p>
              </div>
              <router-link
                :to="`/blog/${latestPost.slug}`"
                class="blog__link blog__link--latest"
              >
                Continue reading..
              </router-link>
              <p class="blog__byline">
                <span class="blog__published">
                  <span class="mdi mdi-calendar"></span>
                  {{ getDate(latestPost.date) }}
                </span>
                <span class="blog__author">
                  <span class="mdi mdi-fountain-pen"></span>
                  {{ latestPost.author.first_name }}
                </span>
              </p>
            </div>
          </div>
          <div class="columns is-desktop">
            <div
              v-for="post in posts"
              :key="post.ID"
              class="column is-4-desktop"
            >
              <div class="blog__post">
                <router-link
                  :to="`/blog/${post.slug}`"
                  class="blog__image-link"
                >
                  <img :src="post.featured_image" class="blog__image" alt="" />
                </router-link>
                <div class="blog__content">
                  <h3 class="blog__title">{{ post.title }}</h3>
                  <div class="blog__body-wrapper">
                    <p class="blog__body">
                      {{ cleanBody(post.excerpt) }}
                    </p>
                  </div>
                  <router-link :to="`/blog/${post.slug}`" class="blog__link">
                    Continue reading..
                  </router-link>
                  <p class="blog__byline">
                    <span class="blog__published">
                      <span class="mdi mdi-calendar"></span>
                      {{ getDate(post.date) }}
                    </span>
                    <span class="blog__author">
                      <span class="mdi mdi-fountain-pen"></span>
                      {{ post.author.first_name }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/blog" class="button">
            <span class="button__span">
              Read more posts!
            </span>
          </router-link>
        </div>
      </section>
      <section class="section content blocks has-text-centered">
        <div class="container">
          <h2 class="blocks__heading--main">Available services</h2>
          <div class="columns blocks__columns">
            <div
              v-for="(block, index) in blocks"
              :key="index"
              class="column blocks__block"
            >
              <div class="blocks__hexagon">
                <span class="mdi blocks__icon" :class="block.icon"></span>
              </div>
              <h3 class="blocks__heading">{{ block.heading }}</h3>
              <p class="blocks__body">{{ block.body }}</p>
            </div>
          </div>
          <router-link to="/contact" class="button button--ghost">
            <span class="button__span">
              Let's get started
            </span>
          </router-link>
        </div>
      </section>
      <section class="hero is-fullheight hero--has-image testimonials">
        <img
          :src="require(`~/assets/images/IMG_2373.jpeg`)"
          alt="Delcarmen coaching male client with log press"
          class="hero__image"
        />
        <div class="hero-body has-text-centered content">
          <div class="container">
            <h2 class="title hero__title">Testimonials</h2>
            <div class="columns">
              <div
                v-for="(testimonial, key) in testimonials"
                :key="key"
                class="column"
              >
                <div class="testimonial">
                  <p class="testimonial__name">{{ testimonial.name }}</p>
                  <p class="testimonial__body">{{ testimonial.body }}</p>
                </div>
              </div>
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
      tagline: 'Let over 10 years of experience guide you through the process.',
      steps: [
        {
          heading: 'Establish your goals',
          body:
            "First thing's first -- we need to find out where you are and where you want to be."
        },
        {
          heading: 'Create a plan',
          body:
            'Once we have established your goals, we need to create a game plan. This could include programming your workouts, adjusting your diet, or both!'
        },
        {
          heading: 'Execute',
          body:
            "All that's left to do is execute! With weekly check-ins, I'll keep you on track to reach your goals!"
        }
      ],
      blocks: [
        {
          icon: 'mdi-weight-lifter',
          heading: 'One-on-one training',
          body:
            'Best for individuals who are new to fitness! Let me be there by your side to guide you through your workouts'
        },
        {
          icon: 'mdi-laptop',
          heading: 'Online coaching',
          body:
            "Already know what you're doing? That's great! I can help those who have their own footing with custom programming and accountability!"
        },
        {
          icon: 'mdi-food-apple',
          heading: 'Nutritional programming',
          body:
            'Let me take the guess work out of food! Get custom nutritional programming to help you lose fat and keep it off!'
        }
      ],
      testimonials: [
        {
          name: 'Allen Trinh',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odit reiciendis hic deserunt vero eveniet necessitatibus laudantium nisi, vitae consectetur, fugiat molestias dolor mollitia obcaecati pariatur nobis! Rerum, a, veritatis.'
        },
        {
          name: 'Leo Luong',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odit reiciendis hic deserunt vero eveniet necessitatibus laudantium nisi, vitae consectetur, fugiat molestias dolor mollitia obcaecati pariatur nobis! Rerum, a, veritatis.'
        },
        {
          name: 'Andrew Delcarmen',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odit reiciendis hic deserunt vero eveniet necessitatibus laudantium nisi, vitae consectetur, fugiat molestias dolor mollitia obcaecati pariatur nobis! Rerum, a, veritatis.'
        }
      ]
    }
  },
  computed: {
    latestPost() {
      return this.$store.state.posts[0]
    },
    posts() {
      return this.$store.state.posts.slice(1, 4)
    }
  },
  methods: {
    getDate(date) {
      const dt = new Date(date)
      const month = dt.toLocaleString('default', { month: 'long' })
      return `${month} ${dt.getDate()}, ${dt.getFullYear()}`
    },
    cleanBody(body) {
      const textarea = document.createElement('textarea')
      textarea.innerHTML = body.replace(/(<([^>]+)>)/gi, '')
      return textarea.value
    }
  },
  head() {
    return {
      title: 'Your premier personal trainer in Virginia Beach, VA',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The best personal trainer for fitness, health, physique, and strength in Virginia Beach, VA.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.how {
  padding-top: 4rem;
  &__heading {
    font-size: 3rem;
  }
  &__body {
    font-size: 1.5rem;
    margin-bottom: 4rem !important;
  }
}

.steps {
  margin-bottom: 3rem;
  &__list {
    padding: 0;
    margin: 0;
    @media (min-width: $tablet) {
      padding-left: 2rem;
    }
  }
  &__list-item {
    list-style: none;
    padding-left: 70px;
    position: relative;
    text-align: left;
    &:not(:last-child) {
      &::before {
        content: '';
        display: block;
        width: 4px;
        height: 100%;
        background: $primaryColor;
        position: absolute;
        top: 44px;
        left: 20px;
      }
    }
  }
  &__number {
    background: $primaryColor;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: inline-block;
    color: #fff;
    font-family: $heading;
    font-style: italic;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1;
    text-align: center;
    padding: 4px 0 0 4px;
    position: absolute;
    top: 0;
    left: 0;
  }
  &__heading {
    font-size: 2rem;
    font-family: $heading;
    color: $primaryColor;
  }
  &__body {
    font-size: 1.25rem;
  }
}

.bordered-image {
  margin-bottom: 3rem;
}

.blog {
  &__heading {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  &__latest {
    margin-bottom: 4rem;
    @media (min-width: $desktop) {
      position: relative;
      display: flex;
      padding: 3rem 0 5rem;
      justify-content: center;
      align-items: center;
      color: #fff;
      &::before {
        content: '';
        display: block;
        width: 80%;
        height: 100%;
        background: $primaryColor;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 2px;
      }
    }
  }
  &__post {
    margin-bottom: 4rem;
  }
  &__image-link {
    display: block;
    width: 100%;
    height: 330px;
    overflow: hidden;
    position: relative;
    margin-bottom: 2rem;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 5px $complementaryColor;
    }
    &--latest {
      @media (min-width: $desktop) {
        max-width: 65%;
        margin-left: 4%;
      }
    }
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    position: absolute;
  }
  &__content {
    &--latest {
      @media (min-width: $desktop) {
        padding: 2rem;
      }
    }
  }
  &__title {
    font-size: 1.75rem;
    position: relative;
  }
  &__body-wrapper {
    position: relative;
    height: 6.1rem;
    overflow: hidden;
    &::after {
      content: '';
      text-align: right;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 70%;
      height: 1rem;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 50%
      );
    }
    &--latest {
      @media (min-width: $desktop) {
        &::after {
          background: linear-gradient(
            to right,
            rgba(39, 73, 110, 0),
            rgba(39, 73, 110, 1) 50%
          );
        }
      }
    }
  }
  &__body {
    font-size: 1.115rem;
  }
  &__link {
    display: inline-block;
    position: relative;
    text-decoration: underline;
    color: $color;
    padding: 0.5rem 0;
    &--latest {
      @media (min-width: $desktop) {
        color: #fff;
      }
    }
  }
  &__byline {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    font-size: 0.85rem;
    @media (min-width: $desktop) {
      justify-content: flex-start;
    }
  }
  &__author {
    padding-left: 0.75rem;
  }
}

.blocks {
  position: relative;
  padding: 8rem 1.5rem;
  background: $primaryColor;
  margin: 0;
  &__columns {
    display: block;
    @media (min-width: $widescreen) {
      display: flex;
    }
  }
  &__hexagon {
    position: relative;
    width: 60px;
    height: 30px;
    background: #fff;
    margin: 0 auto;
    &::before {
      content: '';
      width: 0;
      border-bottom: 20px solid #fff;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      position: absolute;
      bottom: 100%;
      left: 0;
    }
    &::after {
      content: '';
      width: 0;
      border-top: 20px solid #fff;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $primaryColor;
    font-size: 2rem;
    z-index: 1;
  }
  &__heading {
    color: #fff;
    &--main {
      font-size: 2.5rem;
      color: #fff;
      margin-bottom: 4rem;
    }
  }
  &__body {
    color: #fff;
    margin-bottom: 2rem !important;
  }
}

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

.testimonial {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem 1.5rem;
  border-radius: 2px;
  @include box-shadow;
  &__name {
    font-weight: bold;
    font-family: $heading;
    font-size: 1.25rem;
  }
  &__body {
  }
}
</style>
