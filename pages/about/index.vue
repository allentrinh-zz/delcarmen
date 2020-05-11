<template>
  <div id="about">
    <Hero
      title="About DelcarmenFIT"
      subtitle="From the ground up"
      :src="require(`~/assets/images/IMG_2061.jpeg`)"
      alt=""
    />
    <main id="main">
      <section class="section about content">
        <div class="container">
          <div class="columns">
            <div class="column is-8-tablet is-offset-2-tablet">
              <p class="about__body">{{ description }}</p>
              <router-link
                v-if="$store.state.posts.length"
                to="/blog"
                class="button"
              >
                <span class="button__span">
                  Read the blog
                </span>
              </router-link>
              <router-link to="/contact" class="button">
                <span class="button__span">Get in touch</span>
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
      description:
        'Andrew Delcarmen has resided in Virginia Beach since 1993. Growing up Andrew excelled at football and basketball. After his football career was not able to continue into his college years, he searched for his next true passion. The weight room and helping people felt natural. He started his career instructing athletic camps and weight lifting fundamentals at a City Recreation Center. From there he moved on to a larger gym where he would train general fitness clients, physique competitors and sport athletes. After 3 years in this setting, he decided to pursue a more independent route as a trainer and coach. He would then train the next 3 years at 45 Elite, a Private facility dedicated to Martial Arts & Strength and Conditioning. During this time Andrew competed in multiple bodybuilding shows, placing top 3 or higher in every one. After his tenure at 45 Elite, Andrew would begin coaching at The Iron Asylum. A facility dedicated to Strength & Conditioning. During his time there he found his love for the strength sports. Andrew would qualify for USAPL Nationals and USS Strongman Nationals during this time. He also competed in numerous Brazilian Jiu Jitsu Tournaments, taking first place in multiple divisions. Andrew has trained hundreds of clients during his 10 years as a trainer. Ranging from general fitness, bodybuilding, strength athletes, and sport athletes. Andrew believes strength training is not just for the physical benefits but it can improve an individual’s overall quality of life.'
    }
  },
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Learn about the history of DelcarmenFIT'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.about {
  position: relative;
  @media (min-width: $desktop) {
    padding-top: 8rem;
    padding-bottom: 15rem;
  }
  &__body {
    font-size: 1.115rem;
    line-height: 1.85;
    margin-bottom: 2rem !important;
  }
}
</style>
