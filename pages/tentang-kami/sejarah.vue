<template>
  <main class="sejarah">
    <Nav />
    <HeroSub :imgurl="imgurl" :title="title" :directory="directory" />
    <Footer />
  </main>
</template>

<script>
export default {
  data() {
    return {
      imgurl: '/images/hero-sejarah.jpg',
      title: 'Sejarah',
      directory: 'Home / Tentang Kami',
    }
  },
}
</script>

<style lang="scss" scoped>
.sejarah {
  background: linear-gradient(
    180deg,
    rgba(142, 190, 174, 0.3) 0%,
    rgba(59, 113, 81, 0.3) 100%
  );
}
</style>
