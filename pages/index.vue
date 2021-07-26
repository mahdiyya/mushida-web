<template>
  <section class="hero">
    <client-only>
      <swiper ref="carousel" class="swiper" :options="swiperOptions">
        <swiper-slide v-for="feature in features" :key="feature.id">
          <Hero
            :imagefeature="feature.fimg_url"
            :titlefeature="feature.title.rendered"
            :overviewfeature="feature.excerpt.rendered"
            :slugfeature="feature.slug"
            :datefeature="feature.date"
          />
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
        <div slot="button-next" class="swiper-button-next" />
      </swiper>
    </client-only>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SwiperNuxt',
  data () {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next'
        }
      }
    }
  },
  async fetch ({ store }) {
    try {
      const res = await axios.get('https://admin.mushida.org/wp-json/wp/v2/posts?categories=52&order=asc')
      store.commit('featuredPosts', res.data)
    } catch (error) {
    }
  },
  computed: {
    features () {
      return this.$store.state.features
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scope>
.hero {
  background: linear-gradient(180deg, #3c634d 44.4%, #184e2f 100%);
}
.swiper {
  height: 100vh;
  width: 100%;
}
</style>
