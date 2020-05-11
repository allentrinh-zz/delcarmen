export const state = () => ({
  name: 'DelcarmenFIT',
  phone: '7576508054',
  social: [
    {
      platform: 'Facebook',
      icon: 'mdi-facebook',
      to: 'https://www.facebook.com/DelcarmenTrainer/'
    },
    {
      platform: 'Instagram',
      icon: 'mdi-instagram',
      to: 'https://www.instagram.com/delcarmen_fit/'
    }
  ],
  navigation: [
    {
      text: 'About',
      to: '/about'
    },
    {
      text: 'Programs',
      to: '/programs'
    },
    // {
    //   text: 'Personal Training',
    //   to: '/personal-training'
    // },
    {
      text: 'Blog',
      to: '/blog'
    },
    {
      text: 'Contact',
      to: '/contact'
    }
  ],
  wordpress: 'delcarmenfit.wordpress.com',
  posts: []
})

export const getters = {
  formattedTelephone(state) {
    const original = state.phone
    const match = original.match(/^(\d{3})(\d{3})(\d{4})$/)

    return `${match[1]}.${match[2]}.${match[3]}`
  }
}

export const mutations = {
  fetchPosts(state, posts) {
    state.posts = posts.posts
  },
  updateNavigation(state, posts) {
    if (!posts.length) {
      state.navigation.splice(2, 1)
    }
  }
}

export const actions = {
  async fetchPosts({ state, commit }) {
    const api = `https://public-api.wordpress.com/rest/v1.1/sites/${state.wordpress}/posts`
    const posts = await this.$axios.$get(api, {
      params: {
        pretty: true
      }
    })

    commit('fetchPosts', posts)
    commit('updateNavigation', posts)
  }
}
