<template>
  <div id="app">
    <HeaderComponent
      @forceCloseNavigation="forceCloseNavigation"
      @toggleNavigation="toggleNavigation"
    />
    <nuxt />
    <FooterComponent />
    <Navigation
      :navigation-open="navigationOpen"
      @forceCloseNavigation="forceCloseNavigation"
    />
  </div>
</template>

<script>
import HeaderComponent from '~/components/HeaderComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    Navigation
  },
  data() {
    return {
      navigationOpen: false
    }
  },
  mounted() {
    this.$store.dispatch('fetchPosts')
  },
  methods: {
    toggleNavigation() {
      this.navigationOpen = !this.navigationOpen
      if (this.navigationOpen) {
        this.setNavigationFocus()
        document.addEventListener('keyup', (event) => {
          if (event.key === 'Escape') {
            this.forceCloseNavigation()
          }
        })
      }
    },
    forceCloseNavigation() {
      this.navigationOpen = false
    },
    setNavigationFocus() {
      const navigation = this.$children[3]
      navigation.$el.childNodes[0].focus()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';
</style>
