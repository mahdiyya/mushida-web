<template>
  <div class="hero">
    <img :src="imgurl" :alt="title" width="512" height="456" class="img-bg" />
    <div class="header">
      <p class="directory">
        {{ directory }} / <strong>{{ title }}</strong>
      </p>
      <h1>{{ title }}</h1>
    </div>
    <img
      src="/images/acc-pink.svg"
      alt="mushida"
      width="204"
      height="82"
      class="accessories"
    />
  </div>
</template>

<script>
export default {
  props: {
    imgurl: {
      type: String,
      default: null,
    },
    directory: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 512px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background: transparent;
  padding: 0 6vw;
  padding-top: 22rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  .img-bg {
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    height: 444px;
    width: 100%;
  }
  .header {
    color: #fff;
    background-color: #184e2f;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
    width: 896px;
    z-index: 5;
    p {
      margin-bottom: 12px;
    }
  }
  .accessories {
    position: absolute;
    left: 3vw;
    bottom: 0;
    width: 206px;
    height: auto;
  }
}
</style>
