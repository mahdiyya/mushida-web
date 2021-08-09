<template>
  <div class="grid">
    <NuxtLink
      v-for="post in searchres"
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
  async asyncData({ params }) {
    const slug = await params.searchval
    return { slug }
  },
  async fetch({ params, store }) {
    try {
      const res = await axios.get(
        `https://admin.mushida.org/wp-json/wp/v2/posts?search=${params.searchval}&per_page=9&page=${params.nextpage}`,
      )
      store.commit('searchPosts', res.data)
      const search = params.searchval
      const slug = params.nextpage
      return { search, slug }
    } catch (error) {}
  },
  computed: {
    searchres() {
      return this.$store.state.searchres
    },
    searchVal() {
      return this.$store.state.searchVal
    },
  },
}
</script>

<style lang="scss" scoped></style>
