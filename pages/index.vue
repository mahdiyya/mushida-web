<template>
  <section class="hero">
    <client-only>
      <swiper ref="carousel" class="swiper" :options="swiperOptions">
        <swiper-slide v-for="index in 6" :key="index">
          <Hero :index="index" />
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
        <div slot="button-next" class="swiper-button-next" />
      </swiper>
    </client-only>
  </section>
</template>

<script>
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
  methods: {
  }
}
</script>

<style lang="scss" scope>
.hero {
  height: auto;
  .swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
}
</style>
