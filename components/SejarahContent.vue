<template>
  <div class="sejarah-container grid">
    <img :src="imagesejarah" :alt="title" width="512" height="352" />
    <article>
      <p class="date">{{ tanggal }}</p>
      <h3>{{ title }}</h3>
      <div class="content" v-html="content" />
    </article>
  </div>
</template>

<script>
export default {
  props: {
    imagesejarah: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    tanggal: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.grid {
  img {
    box-shadow: 0px 16px 60px -40px rgba(0, 0, 0, 0.35);
    max-width: 100%;
    height: auto;
  }
  .date {
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    width: max-content;
    height: auto;
    line-height: 1;

    padding: 10px 12px 6px 27px;
    margin-bottom: 1rem;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url(/images/toggle-date-mobile.svg);
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -1;
    }
  }
  h3 {
    font-size: 30px;
    margin-bottom: 1.5rem;
  }
}
@media all and(min-width: 768px) {
  .grid {
    h3 {
      font-size: 36px;
    }
    article {
      padding-left: 1rem;
      grid-column: 2 / span 2;
      .date {
        font-size: calc(11px + 0.35vw);
        animation: fadeInUp 0.6s ease-out 0.02s;
        padding: 10px 14px 10px 44px;
        &::before {
          background-image: url(/images/toggle-date.svg);
        }
      }
    }
    h3 {
      font-size: calc(18px + 1.3vw);
    }
  }
}
</style>
