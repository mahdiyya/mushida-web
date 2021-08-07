<template>
  <main>
    <Nav />
    <section>
      <div class="section-container">
        <h1 class="result-title">
          Hasil Pencarian : <i>{{ slug }}</i>
        </h1>
        <p v-if="totalpages == 0" class="text-center" style="margin-top: 4rem">
          Maaf, pencarian tentang
          <strong>{{ searchvalue }}</strong> tidak ditemukan.
        </p>
        <NuxtChild />
        <div v-if="totalpages > 0" class="row pagination">
          <NuxtLink
            v-for="index in totalpages"
            :key="index"
            class="index"
            :to="`/search/result/redirect/${slug}/${index}`"
            >{{ index }}</NuxtLink
          >
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  async asyncData({ params }) {
    const slug = await params.searchval
    return { slug }
  },
  data(params) {
    return {
      imgurl: '/images/hero-berita.jpg',
      title: 'Berita & Artikel',
      directory: 'Home / Berita & Artikel',
      isActive: false,
    }
  },

  async fetch({ params, store }) {
    // const value = this.$store.state.searchvals.value
    try {
      const res = await axios.get(
        `https://admin.mushida.org/wp-json/wp/v2/posts?search=${params.searchval}`,
      )
      store.commit('totalPageSearch', parseInt(res.headers['x-wp-totalpages']))
      const searchvalue = params.searchval
      return { searchvalue }
    } catch (error) {}
  },

  computed: {
    totalpages() {
      return this.$store.state.totalpagesearchs
    },
    ...mapState(['values']),
  },
}
</script>

<style lang="scss">
.result-title {
  font-size: 42px;
}
.grid {
  grid-gap: 2.5rem;
  gap: 2.5rem;
}
.card.news {
  position: relative;
  border-radius: 0;
  padding: 0;
  overflow: hidden;
  height: 456px;
  text-decoration: none;
  box-shadow: 0px 16px 60px -40px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease-in-out;
  figure {
    position: relative;
    width: 100%;
    height: 45%;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
    }
  }

  caption {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    width: max-content;
    max-width: 100%;
    color: #000;
    transition: all 0.3s ease-in-out;
    z-index: 4;
    h3,
    p {
      text-decoration: none;
    }
    h3 {
      font-size: 24px;
      text-align: left;
      overflow: hidden;
      -webkit-box-orient: vertical;
      display: block;
      display: -webkit-box;
      overflow: hidden !important;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
    }
    .content {
      overflow: hidden;
      line-height: 1.3;
      margin-top: 1rem;
      padding-right: 2rem;
      -webkit-box-orient: vertical;
      display: block;
      display: -webkit-box;
      overflow: hidden !important;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
      p {
        text-align: left;
      }
    }
  }
  &::after {
    content: '';
    position: absolute;
    right: 0rem;
    bottom: 0;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 2rem 0 0 0;
    background: #0c4524;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }
  &::before {
    content: '';
    position: absolute;
    right: 0rem;
    bottom: 0;
    width: 3.2rem;
    height: 3.5rem;
    border-radius: 2rem 0 0 0;
    background-image: url('/images/arrow-white-right.svg');
    background-size: 1rem 2.5rem;
    background-position: center center;
    background-repeat: no-repeat;
    z-index: 3;
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
    &::after {
      width: 4rem;
      height: 4rem;
    }
  }
}
.pagination {
  justify-content: center;
  padding: 1rem;
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  background: #fff;
  .index {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    width: 1.8rem;
    height: 1.8rem;
    text-align: center;
    text-decoration: none;
    border-radius: 1rem;
    font-size: 14px;
    margin: 2px;
    color: #000;
    transition: all 0.3s ease-in-out;
    &.nuxt-link-active {
      background: #1c5032;
      color: #fff;
      font-weight: 900;
    }
    &:hover {
      background: #86caa1;
      font-weight: 500;
    }
  }
}
.date {
  text-align: left;
  margin-top: 4px;
  span {
    font-size: 14px;
  }
}
</style>
