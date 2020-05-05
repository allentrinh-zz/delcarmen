<template>
  <div id="about">
    <Hero
      title="Contact Andrew"
      subtitle="Consultations are free!"
      :src="require(`~/assets/images/IMG_7706.jpeg`)"
      alt=""
    />
    <main id="main">
      <section class="section content">
        <div class="container">
          <div class="columns">
            <div class="column is-8-tablet is-offset-2-tablet">
              <div class="contact">
                <h2 class="contact__heading">Let's work together</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Hero
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact DelcarmenFIT today!'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles.scss';
</style>
