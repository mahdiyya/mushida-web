<template>
  <div class="swiper--slide text-white">
    <article>
      <h2>{{ titlefeature }}</h2>
      <!-- eslint-disable vue/no-v-html -->
      <div class="overview" v-html="overviewfeature" />
      <!-- eslint-enable -->
      <NuxtLink
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
      </NuxtLink>
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
      font-size: calc(16px + 2vw);
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
@media all and (min-width: 1920px) {
  .swiper--slide article {
    padding-top: 20rem;
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

@media all and (max-width: 768px) {
  .swiper--slide {
    flex-direction: column;
    justify-content: flex-end;
    figure {
      width: 100vw;
      padding-left: 0vw;
      padding-bottom: 5vh;
      padding-top: 0rem;
      height: 62vh;
      order: -1;
    }
    article {
      flex: 0 0 38%;
      max-width: 100%;
      padding: 0rem 6vw 2rem 6vw;
    }
  }
}
</style>
