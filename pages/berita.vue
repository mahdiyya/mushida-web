<template>
  <main>
    <Nav />
    <HeroSub :imgurl="imgurl" :title="title" :directory="directory" />
    <section>
      <div class="section-container">
        <NuxtChild />
        <div class="row pagination">
          <NuxtLink
            v-for="index in totalpages.length"
            :key="index"
            class="index"
            :to="`/berita/${index}`"
            >{{ index }}</NuxtLink
          >
        </div>
      </div>
      <p>{{ totalpages }}</p>
    </section>
    <Footer />
  </main>
</template>

<script>
import axios from 'axios'
export default {
  async fetch({ store }) {
    try {
      const res = await axios.get(
        'https://admin.mushida.org/wp-json/wp/v2/posts?page=1',
      )
      store.commit('totalPage', res.headers['x-wp-totalpages'])
    } catch (error) {}
  },
  computed: {
    totalpages() {
      return this.$store.state.totalpages
    },
  },
}
</script>

<style>
.herobanner {
  width: 100%;
  height: 100%;
}
</style>
