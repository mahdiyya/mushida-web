<template>
  <div class="grid">
    <NuxtLink
      v-for="post in posts"
      :key="post.id"
      class="card news"
      :to="`/${post.date.substr(0, 4)}/${post.date.substr(5, 2)}/${post.slug}`"
    >
      <figure>
        <img
          v-if="post.fimg_url == false"
          src="/images/no-image400.jpg"
          :alt="post.title.rendered"
        />
        <img v-else :src="post.fimg_url" :alt="post.title.rendered" />
      </figure>
      <caption>
        <h3>{{ post.title.rendered }}</h3>
        <Date
          :date="post.date.substr(8, 2)"
          :month="post.date.substr(5, 2)"
          :year="post.date.substr(0, 4)"
        />
        <div class="content" v-html="post.excerpt.rendered"></div>
      </caption>
    </NuxtLink>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch({ params, store }) {
    try {
      const res = await axios.get(
        `https://admin.mushida.org/wp-json/wp/v2/posts?categories=5&per_page=9&page=${params.slug}`,
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
