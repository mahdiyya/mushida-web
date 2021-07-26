<template>
  <div class="container">
    <div>
      <h1 class="title">Lats Posts Checker</h1>
      <div v-for="post in posts" :key="post.id" class="post">
        <nuxt-link
          :to="`${post.date.substr(0, 4)}/${post.date.substr(5, 2)}/${
            post.slug
          }`"
        >
          {{ post.title.rendered }}
        </nuxt-link>
        <div class="post">{{ post.excerpt.rendered }}</div>
      </div>
    </div>
    <p>{{ totalpages }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch ({ store }) {
    try {
      const res = await axios.get('https://admin.mushida.org/wp-json/wp/v2/posts?page=1')
      store.commit('frontPagePosts', res.data)
      store.commit('totalPage', res.headers['x-wp-totalpages'])
    } catch (error) {
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    },
    totalpages () {
      return this.$store.state.totalpages
    }
  }
}
</script>

<style>
.herobanner {
  width: 100%;
  height: 100%;
}
</style>
