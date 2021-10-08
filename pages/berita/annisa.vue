<template>
  <section>
    <div class="section-container p-t-0">
      <NuxtChild />
      <div class="row pagination">
        <div v-for="index in totalpages" :key="index">
          <NuxtLink v-if="index === 1" to="/berita/annisa/" class="index">{{
            index
          }}</NuxtLink>
          <NuxtLink v-else :to="`/berita/annisa/${index}`" class="index">
            {{ index }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  async fetch({ store }) {
    try {
      const res = await axios.get(
        'https://admin.mushida.org/wp-json/wp/v2/posts?categories=5&per_page=9',
      )
      store.commit('totalPage', parseInt(res.headers['x-wp-totalpages']))
    } catch (error) {}
  },
  computed: {
    totalpages() {
      return this.$store.state.totalpages
    },
  },
}
</script>
