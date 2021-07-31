<template>
  <main class="sejarah">
    <Nav />
    <HeroSub :imgurl="imgurl" :title="title" :directory="directory" />
    <section class="section-container">
      <div class="grid milestone-nav">
        <NuxtLink to="/tentang-kami/sejarah"> <span>2000</span></NuxtLink>
        <NuxtLink to="/tentang-kami/sejarah/2006"> <span>2006</span></NuxtLink>
        <NuxtLink to="/tentang-kami/sejarah/2010"> <span>2010</span></NuxtLink>
        <NuxtLink to="/tentang-kami/sejarah/2015"> <span>2015</span></NuxtLink>
        <NuxtLink to="/tentang-kami/sejarah/2020"> <span>2020</span></NuxtLink>
      </div>
      <NuxtChild />
    </section>
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
      isActive: false,
    }
  },
  methods: {
    isActiveNav() {
      if (this.isActive === true) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.sejarah {
  @media (min-width: 768px) {
    .milestone-nav.grid {
      grid-template-columns: repeat(5, 1fr);
      gap: 10rem;
    }
  }

  background: linear-gradient(
    180deg,
    rgba(142, 190, 174, 0.3) 0%,
    rgba(59, 113, 81, 0.3) 100%
  );
  .milestone-nav {
    position: relative;
    width: max-content;
    margin: 0;
    margin-bottom: 5rem;
    &::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 2rem;
      width: 92%;
      height: 2px;
      border-top: 2px dashed #545454;
    }

    a {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0;
      text-decoration: none;
      color: #404040;
      font-weight: 500;
      &::before {
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 16px 16px;
        background: #545454;
        margin-bottom: 1rem;
        transition: all 0.3s ease-in-out;
      }
      span {
        position: relative;
        display: flex;
        padding: 8px 12px 4px 12px;
        transition: all 0.3s ease-out;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: url('/images/toggle-date-main.svg');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: contain;
          z-index: -1;
          opacity: 0;
          transition: all 0.3s ease-out;
        }
      }
      &:hover {
        span::after {
          opacity: 0.2;
        }
      }
    }
    .nuxt-link-exact-active {
      color: #fff;
      span::after {
        opacity: 1;
      }
      &::before {
        background: transparent;
        border-width: 8px;
        border-color: #545454;
        border-style: double;
      }
    }
  }
}
</style>
