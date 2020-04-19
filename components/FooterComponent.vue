<template>
  <div>
    <div class="instagram-bar has-text-centered">
      <h2 class="instagram-bar__heading">
        <a
          href="https://instagram.com/delcarmen_fit"
          class="instagram-bar__link"
          target="_blank"
        >
          <span class="mdi mdi-instagram instagram-bar__icon"></span>
          Delcarmen_Fit
        </a>
      </h2>
      <p class="instagram-bar__body">
        Follow me on Instagram for free tips and exclusive promotions!
      </p>
      <a
        href="https://instagram.com/delcarmen_fit"
        class="button"
        target="_blank"
      >
        <span class="button__span">
          Follow me on Instagram!
        </span>
      </a>
    </div>
    <footer class="footer">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column">
            <Logo />
          </div>
          <div class="column">
            <h2 class="footer__heading">
              Navigation
            </h2>
            <ul class="footer__list">
              <li
                v-for="(item, index) in $store.state.navigation"
                :key="index"
                class="footer__list-item"
              >
                <router-link :to="item.to" class="footer__link">
                  {{ item.text }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="column">
            <h2 class="footer__heading">Follow me!</h2>
            <SocialList />
          </div>
          <div class="column has-text-right-desktop">
            <h2 class="footer__heading">From the blog</h2>
            <ul class="footer__list">
              <li
                v-for="post in posts"
                :key="post.ID"
                class="footer__list-item"
              >
                <router-link :to="`/blog/${post.slug}`" class="footer__link">
                  {{ post.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__legal">
        <div class="container is-fluid">
          <div class="columns is-mobile">
            <div class="column">
              <p class="footer__body">
                Copyright &copy; {{ new Date().getFullYear() }} Andrew Delcarmen
              </p>
            </div>
            <div class="column has-text-right">
              <a
                href="https://allentrinh.com"
                class="footer__link footer__link--gray"
                target="_blank"
                rel="nofollow"
              >
                Web Design and Development by Allen Trinh
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SocialList from '~/components/SocialList.vue'

export default {
  components: {
    Logo,
    SocialList
  },
  computed: {
    posts() {
      return this.$store.state.posts.slice(0, 3)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';

.instagram-bar {
  background: #fafafa;
  padding: 3rem 0.75rem;
  &__icon {
    color: #fd4f50;
  }
  &__link {
    color: $color;
  }
  &__heading {
    font-style: normal;
    font-size: 2rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
  &__body {
    font-size: 1.15rem;
    margin-bottom: 3rem;
  }
}

.footer {
  background: #000;
  padding: 3rem 1.5rem 0;
  &__legal {
    padding: 3rem 0 0;
  }
  &__heading {
    font-size: 1.115rem;
    color: #fff;
    margin-bottom: 1rem;
  }
  &__body {
    color: #757575;
  }
  &__link {
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
    &--gray {
      color: #757575;
    }
  }
}
</style>
