<template>
  <div class="swiper--slide text-white">
    <article>
      <h2>{{ titlefeature }}</h2>
      <div class="overview" v-html="overviewfeature" />
      <nuxt-link
        :to="`${datefeature.substr(0, 4)}/${datefeature.substr(
          5,
          2
        )}/${slugfeature}`"
        class="btn white arrow"
        rel="noreferrer noopener"
      >
        Selengkapnya
        <img
          src="images/arrow-full-right.svg"
          alt="arrow right green"
          width="24"
          height="24"
          class="img-icon"
        >
      </nuxt-link>
    </article>
    <figure>
      <img :src="imagefeature" :alt="titlefeature">
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    imagefeature: {
      type: String,
      default: null
    },
    titlefeature: {
      type: String,
      default: null
    },
    overviewfeature: {
      type: String,
      default: null
    },
    slugfeature: {
      type: String,
      default: null
    },
    datefeature: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper--slide {
  width: 100%;
  height: 100%;
  display: flex;
  article {
    display: flex;
    height: 100%;
    flex: 0 0 52%;
    max-width: 52%;
    flex-direction: column;
    padding: 13rem 4rem 3rem 6vw;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    h2 {
      font-size: 48px;
      margin-bottom: 2rem;
      overflow: hidden;
      -webkit-box-orient: vertical;
      display: block;
      display: -webkit-box;
      overflow: hidden !important;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
    }
  }
  figure {
    width: 48%;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.9;
    }
  }
}
.swiper-slide-duplicate-active .swiper--slide {
  article {
    opacity: 1;
  }
}
.swiper-slide.swiper-slide-active .swiper--slide {
  article {
    opacity: 1;
  }
}
</style>
