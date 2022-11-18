<template>
  <section>
    <div class="section-container p-t-0">
      <NuxtChild />
      <div class="row pagination">
        <NuxtLink
          v-if="prevpage > 0"
          :to="`/berita/dakwah/${theprevpage}`"
          class="index"
          @click="clicktonextpage(7)"
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="prev"
          >
            <path
              d="M8.14009 2.28088L2.4995 7.92147L8.14009 13.5621"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </NuxtLink>
        <div v-for="index in totalpages" :key="index">
          <template v-if="index >= startpage && index <= parsepage">
            <NuxtLink v-if="index === 1" to="/berita/dakwah/" class="index">{{
              index
            }}</NuxtLink>
            <NuxtLink v-else :to="`/berita/dakwah/${index}`" class="index">
              {{ index }}
            </NuxtLink>
          </template>
        </div>
        <NuxtLink
          v-if="nextpage <= totalpages"
          :to="`/berita/dakwah/${nextpage}`"
          class="index"
          @click="clicktonextpage()"
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4995 2.28088L7.14009 7.92147L1.4995 13.5621"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </NuxtLink>
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
        'https://admin.mushida.org/wp-json/wp/v2/posts?categories=4&per_page=9',
      )
      store.commit('totalPage', parseInt(res.headers['x-wp-totalpages']))
    } catch (error) {}
  },
  computed: {
    totalpages() {
      return this.$store.state.totalpages
    },
    currPage() {
      const slug = this.$route.params.slug
      let page = 1
      if (slug !== null && slug !== undefined) {
        page = parseInt(slug)
      }
      return parseInt(page)
    },
    nextpage() {
      return this.currPage + 1
    },
    prevpage() {
      return this.currPage - 1
    },
    startpage() {
      let start = 1
      if (this.currPage > 2) {
        start = this.currPage - 2
      }
      return start
    },
    parsepage() {
      let total = this.currPage + (5 - this.currPage)
      if (this.currPage > 2) {
        total = this.currPage + 2
      }
      return total
    },
  },
}
</script>
