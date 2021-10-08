<template>
  <section>
    <div class="section-container p-t-0">
      <NuxtChild />
      <div class="row pagination">
        <div v-for="index in totalpages" :key="index" class="index">
          <NuxtLink v-if="index === 1" to="/berita/">{{ index }}</NuxtLink>
          <NuxtLink v-else :to="`/berita/${index}`">
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
        'https://admin.mushida.org/wp-json/wp/v2/posts?per_page=9',
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
