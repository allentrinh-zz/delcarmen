<template>
  <div id="contact">
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
                <form
                  name="contact-form"
                  action="thanks"
                  method="POST"
                  netlify
                  netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact-form" />
                  <div class="field">
                    <label for="name" class="label">
                      Name <span class="contact-form__asterisk">*</span>
                    </label>
                    <div class="control">
                      <input
                        id="name"
                        type="text"
                        class="input"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label for="email" class="label">
                      Email <span class="contact-form__asterisk">*</span>
                    </label>
                    <div class="control">
                      <input
                        id="email"
                        type="text"
                        class="input"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label for="comments" class="label">Comments</label>
                    <div class="control">
                      <textarea
                        id="comments"
                        name="comments"
                        class="textarea has-fixed-size"
                        rows="5"
                      >
                      </textarea>
                    </div>
                    <p class="help">
                      <span class="contact-form__asterisk">*</span>
                      denotes a required field
                    </p>
                  </div>
                  <div class="field is-grouped">
                    <div class="control">
                      <button type="submit" class="button is-link">
                        <span class="button__span">
                          Submit
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
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

.contact-form {
  &__asterisk {
    color: #f00;
  }
}
</style>
