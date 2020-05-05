<template>
  <div id="blog">
    <Hero
      title="Blog"
      subtitle="The thoughts and ideas of Andrew Delcarmen"
      :src="require(`~/assets/images/IMG_0337.jpeg`)"
      alt="Andrew Delcarmen coaching a deadlift"
    />
    <section class="section content blog">
      <div v-if="pages.length" class="container">
        <h2 class="blog__heading has-text-centered">Recent Posts</h2>
        <div class="pages">
          <div
            v-for="(page, index) in pages"
            v-show="index === currentPage"
            :id="`page-${index}`"
            :key="index"
            class="pages__page"
          >
            <div v-for="post in page" :key="post.ID" class="post">
              <div class="columns">
                <div class="column is-4 post__column">
                  <router-link
                    :to="`/blog/${post.slug}`"
                    class="post__image-link"
                  >
                    <img
                      :src="post.featured_image"
                      class="post__image"
                      alt=""
                    />
                  </router-link>
                </div>
                <div class="column is-8 post__column post__column--padding">
                  <router-link :to="`/blog/${post.slug}`" class="post__link">
                    <h3 class="post__header">{{ post.title }}</h3>
                  </router-link>
                  <p class="post__byline">
                    <span class="post__published">
                      <span class="mdi mdi-calendar"></span>
                      {{ getDate(post.date) }}
                    </span>
                    <span class="post__author">
                      <span class="mdi mdi-fountain-pen"></span>
                      {{ post.author.first_name }}
                    </span>
                  </p>
                  <p class="post__body">
                    {{ cleanBody(post.excerpt) }}
                  </p>
                  <router-link
                    :to="`/blog/${post.slug}`"
                    class="post__link button"
                  >
                    <span class="button__span">
                      Continue reading..
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pages[1].length" class="ad-pagination has-text-centered">
          <p class="ad-pagination__header">Pagination</p>
          <ul class="ad-pagination__list">
            <li class="ad-pagination__list-item">
              <button
                class="ad-pagination__button ad-pagination__button--previous"
                :disabled="currentPage === 0"
                @click="togglePage(currentPage - 1)"
              >
                <span class="mdi mdi-chevron-left"></span>
                <span class="is-sr-only">Previous page</span>
              </button>
            </li>
            <li
              v-for="(page, index) in pages"
              :key="index"
              class="ad-pagination__list-item"
            >
              <button
                class="ad-pagination__button"
                :class="
                  index === currentPage ? 'ad-pagination__button--active' : ''
                "
                @click="togglePage(index)"
              >
                {{ index + 1 }}
              </button>
            </li>
            <li class="ad-pagination__list-item">
              <button
                class="ad-pagination__button ad-pagination__button--next"
                :disabled="currentPage === pages.length - 1"
                @click="togglePage(currentPage + 1)"
              >
                <span class="mdi mdi-chevron-right"></span>
                <span class="is-sr-only">Next page</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="container">
        <div class="columns">
          <div class="column is-8-desktop is-offset-2-desktop">
            <div class="no-posts">
              <h2 class="no-posts__heading">Sorry!</h2>
              <p class="no-posts__body">
                There isn't anything to show here just yet!
              </p>
              <router-link to="/" class="button no-posts__link">
                <span class="button__span">Go home</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Hero
  },
  data() {
    return {
      currentPage: 0
    }
  },
  computed: {
    pages() {
      return this.chunk(this.$store.state.posts, 6)
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
    },
    chunk(array, size) {
      if (!array) return []
      const firstChunk = array.slice(0, size)
      if (!firstChunk.length) {
        return array
      }
      return [firstChunk].concat(
        this.chunk(array.slice(size, array.length), size)
      )
    },
    autoScroll() {
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: this.$el.firstChild.offsetHeight
      })
    },
    togglePage(page) {
      this.autoScroll()
      this.currentPage = page
    }
  },
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The thoughts and ideas of Andrew Delcarmen, personal trainer in Virginia Beach, VA'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.blog {
  &__heading {
    font-size: 2.25rem;
    margin-bottom: 4rem;
  }
}

.post {
  margin-bottom: 3rem;
  &__column {
    &--padding {
      @media (min-width: $desktop) {
        padding-left: 3rem;
      }
    }
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
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    position: absolute;
  }
  &__byline {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    @media (min-width: $desktop) {
      justify-content: flex-start;
    }
  }
  &__author {
    padding-left: 0.75rem;
  }
}

.ad-pagination {
  &__list {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__list-item {
    list-style: none;
    margin: 0;
    padding: 0 0.15rem;
  }
  &__button {
    display: block;
    border: 1px solid #e3e3e3;
    background-color: transparent;
    width: 44px;
    height: 44px;
    @include transition;
    &:hover {
      background: $primaryColor;
      border-color: $primaryColor;
      color: #fff;
    }
    &--active {
      background: $primaryColor;
      border-color: $primaryColor;
      color: #fff;
    }
    &--previous,
    &--next {
      &[disabled] {
        &:hover {
          border: 1px solid #e3e3e3;
          background-color: transparent;
          color: $color;
        }
      }
    }
  }
}
</style>
