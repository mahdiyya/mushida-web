<template>
  <div class="grid">
    <NuxtLink
      v-for="post in posts"
      :key="post.id"
      class="card news"
      :to="`/${post.date.substr(0, 4)}/${post.date.substr(5, 2)}/${post.slug}`"
    >
      <h3>{{ post.title.rendered }}</h3>
      <div class="content" v-html="post.excerpt.rendered"></div>
    </NuxtLink>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch({ store }) {
    try {
      const res = await axios.get(
        'https://admin.mushida.org/wp-json/wp/v2/posts?page=1',
      )
      store.commit('frontPagePosts', res.data)
    } catch (error) {}
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
}
</script>

<style></style>
