<template>
  <div id="programs">
    <Hero
      title="Programs"
      subtitle=""
      :src="require(`~/assets/images/IMG_0337.jpeg`)"
      alt=""
    />
    <main id="main">
      <section class="section content">
        <div class="container">
          <div class="columns">
            <div class="column is-8-desktop is-offset-2-desktop">
              <div class="specialties">
                <h2 class="specialties__heading">Specialties</h2>
                <p class="specialties__body">
                  Not everyone is "one size fits all", and neither should your
                  trainer be. That is why I have dedicated myself to these many
                  different expertises.
                </p>
                <ul class="specialties__list">
                  <li
                    v-for="specialty in specialties"
                    :key="specialty"
                    class="specialties__list-item"
                  >
                    <span class="specialties__span">
                      {{ specialty }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section programs">
        <div class="container content">
          <div class="columns">
            <div class="column is-8-desktop is-offset-2-desktop">
              <h2 class="programs__heading">Who it's for, what you get</h2>
              <div
                v-for="(page, i) in programs"
                :key="i"
                class="columns is-desktop"
              >
                <div
                  v-for="(program, index) in page"
                  :key="index"
                  class="column"
                >
                  <div class="program">
                    <h3 class="program__heading">{{ program.title }}</h3>
                    <ul class="program__list">
                      <li
                        v-for="(point, key) in program.points"
                        :key="key"
                        class="program__list-item"
                      >
                        {{ point }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="hero is-fullheight hero--has-image">
        <img
          :src="require(`~/assets/images/IMG_2366.jpeg`)"
          alt="Delcarmen spotting a female client's squat"
          class="hero__image"
        />
        <div class="hero-body has-text-centered content">
          <div class="container">
            <h2 class="title hero__title">
              Not sure what's right for you?
            </h2>
            <p class="subtitle hero__subtitle">
              I can help with that!
            </p>
            <router-link to="/contact" class="button">
              <span class="button__span">
                Contact me for free
              </span>
            </router-link>
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
      specialties: [
        'Bodybuilding',
        'Powerlifting',
        'Strongman',
        'Sports Performance',
        'General Fitness'
      ],
      programs: [
        [
          {
            title: 'In Gym Coaching',
            points: [
              'Ideal for local clients who prefer in person coaching',
              'For Novice Clients to Competitive Athletes ',
              'Includes individualized programming ',
              'Wide selection of programs to fit your budget & needs'
            ]
          },
          {
            title: 'Online Coaching',
            points: [
              'For Novice Clients to Competitive Athletes',
              // 'Initial Skype Call',
              'Individualized Programming ',
              'Video Analysis',
              'Weekly Adjustments'
            ]
          }
        ],
        [
          {
            title: 'Nutrition Coaching',
            points: [
              'For General Weight Management to Body Weight Specifc Requirments ',
              // 'Initial Skype Call',
              'Macronutrients',
              'Meal Planning',
              'Weekly Adjustments'
            ]
          },
          {
            title: 'Complete Coaching',
            points: [
              'For Novice Clients to Competitive Athletes',
              // 'Initial Skype Call',
              'Individualized Programming',
              'Individualized Nutrtition Coaching ',
              'Video Analysis',
              'Weekly Adjustments'
            ]
          }
        ]
      ]
    }
  },
  head() {
    return {
      title: 'Programs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Find a training program for you!'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.specialties {
  @media (min-width: $desktop) {
    padding: 8rem 1.5rem;
  }
  &__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -0.75rem;
  }
  &__list-item {
    flex: 0 0 100%;
    display: block;
    list-style: none;
    margin: 0;
    padding: 0.75rem;
    @media (min-width: $tablet) {
      flex: 0 0 50%;
    }
  }
  &__span {
    background: $primaryColor;
    color: #fff;
    font-family: $heading;
    font-style: italic;
    font-weight: 700;
    font-size: 1.5rem;
    display: block;
    padding: 0.45rem 0.75rem;
    border-radius: 2px;
  }
}

.programs {
  background: $primaryColor;
  color: #fff;
  @media (min-width: $desktop) {
    padding: 8rem 1.5rem;
  }
  &__heading {
    color: #fff;
  }
}

.program {
  height: 100%;
  padding: 1rem 0.75rem;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  &__heading {
    color: #fff;
  }
  &__list {
  }
  &__list-item {
    color: #fff;
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
</style>
