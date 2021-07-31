<template>
  <main class="visi-misi">
    <Nav />
    <HeroSub :imgurl="imgurl" :title="title" :directory="directory" />
    <section>
      <div class="section-container">test</div>
    </section>
    <Footer />
  </main>
</template>

<script>
export default {
  data() {
    return {
      imgurl: '/images/herovisi.jpg',
      title: 'Visi & Misi',
      directory: 'Home / Tentang Kami',
    }
  },
}
</script>

<style lang="scss" scoped>
.visi-misi {
  section {
    background: linear-gradient(
      180deg,
      rgba(238, 255, 249, 0.18) 0%,
      rgba(59, 113, 81, 0.18) 100%
    );
  }
  .section-container {
    padding-top: 0;
  }
  h2 {
    margin-bottom: 2rem;
    &:nth-child(3) {
      margin-top: 2rem;
    }
  }
  blockquote {
    font-size: calc(10px + 0.6vw);
  }
}
</style>
