<template>
  <div id="post">
    <Hero :title="post.title" subtitle="" :src="post.featured_image" />
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8-tablet is-offset-2-tablet">
            <div class="post">
              <div class="post__body" v-html="post.content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section content">
      <div class="container">
        <div class="columns">
          <div class="column is-8-tablet is-offset-2-tablet">
            <div class="related">
              <h2 class="related__heading">Related Posts</h2>
              <ul class="related__list">
                <li
                  v-for="related in relatedPosts"
                  :key="related.ID"
                  class="related__list-item"
                >
                  <router-link
                    :to="`/blog/${related.slug}`"
                    class="related__link"
                  >
                    {{ related.title }}
                  </router-link>
                </li>
              </ul>
            </div>
            <router-link to="/blog" class="button">
              <span class="button__span">
                Back to all posts
              </span>
            </router-link>
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
  async asyncData({ app, store, params }) {
    const api = `https://public-api.wordpress.com/rest/v1.1/sites/${store.state.wordpress}/posts/slug:${params.slug}`
    const post = await app.$axios.$get(api)

    return {
      post
    }
  },
  computed: {
    relatedPosts() {
      const posts = this.$store.state.posts
      const related = []

      if (posts.length) {
        let i = 0
        while (related.length < 5 && i < posts.length) {
          if (posts[i].ID !== this.post.ID) {
            related.push(posts[i])
          }
          i++
        }
      }

      return related
    }
  },
  head() {
    return {
      title: this.post ? `${this.post.title} | Blog` : 'Article',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.excerpt
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.post {
  &__body {
    font-size: 1.115rem;
    line-height: 1.85;
  }
}

.related {
  margin-bottom: 2rem;
}
</style>
