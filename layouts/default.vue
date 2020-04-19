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
    },
    forceCloseNavigation() {
      this.navigationOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';
</style>
