<template>
  <div class="container">
    <section>
      <h1>{{ article[0].title.rendered }}</h1>
      <article>
        {{ article[0].content.rendered }}
      </article>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch ({ params, store }) {
    try {
      const res = await axios.get(`https://admin.mushida.org/wp-json/wp/v2/posts/?slug=${params.blog}`)
      store.commit('articleData', res.data)
    } catch (error) {
    }
  },
  computed: {
    article () {
      return this.$store.state.article
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
