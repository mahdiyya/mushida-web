<template>
  <section>
    <div class="section-container p-t-0">
      <NuxtChild />
      <div class="row pagination">
        <!-- <NuxtLink
          v-if="theprevpage > 0"
          :to="`/berita/all/${theprevpage}`"
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
        </NuxtLink> -->
        <div v-for="index in totalpages" :key="index">
          <NuxtLink v-if="index === 1" to="/berita/all/" class="index">{{
            index
          }}</NuxtLink>
          <NuxtLink v-else :to="`/berita/all/${index}`" class="index">
            {{ index }}
          </NuxtLink>
        </div>
        <!-- <NuxtLink
          v-if="totalpages > 5"
          :to="`/berita/all/${thenextpage}`"
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
        </NuxtLink> -->
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      thenextpage: 6,
      theprevpage: 1,
    }
  },
  async fetch({ store }) {
    try {
      const res = await axios.get(
        'https://admin.mushida.org/wp-json/wp/v2/posts?per_page=9',
      )
      store.commit('totalPage', parseInt(res.headers['x-wp-totalpages']))
      // if (parseInt(res.headers['x-wp-totalpages']) > 5) {
      //   store.commit('nextPage', 6)
      // }
    } catch (error) {}
  },
  computed: {
    totalpages() {
      return this.$store.state.totalpages
    },
    // thenextpage() {
    //   return this.$store.state.thenextpage
    // },
  },
  methos: {
    clicktonextpage(a) {
      this.thenextpage = a
      this.theprevpage = 1
    },
  },
}
</script>
