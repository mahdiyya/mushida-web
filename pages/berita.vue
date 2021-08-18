<template>
  <main>
    <Nav />
    <HeroSub :imgurl="imgurl" :title="title" :directory="directory" />
    <section>
      <div class="section-container p-t-0 p-b-2">
        <div class="row categories">
          <NuxtLink to="/berita/all" class="cat-btn">Semua</NuxtLink>
          <NuxtLink to="/berita/news" class="cat-btn">Berita</NuxtLink>
          <NuxtLink to="/berita/artikel" class="cat-btn">Artikel</NuxtLink>
          <NuxtLink to="/berita/annisa" class="cat-btn">Annisa</NuxtLink>
          <NuxtLink
            to="/berita/siaranpers"
            class="cat-btn"
            style="min-width: 106px;"
            >Siaran Pers</NuxtLink
          >
          <NuxtLink to="/berita/agenda" class="cat-btn">Agenda</NuxtLink>
          <NuxtLink to="/berita/dakwah" class="cat-btn">Dakwah</NuxtLink>
          <NuxtLink to="/berita/internasional" class="cat-btn"
            >Internasional</NuxtLink
          >
          <NuxtLink to="/berita/wilayah" class="cat-btn">Wilayah</NuxtLink>
          <NuxtLink to="/berita/parenting" class="cat-btn">Parenting</NuxtLink>
        </div>
      </div>
    </section>
    <NuxtChild />
    <Footer />
  </main>
</template>

<script>
export default {
  data() {
    return {
      imgurl: '/images/hero-berita.jpg',
      title: 'Berita & Artikel',
      directory: 'Home / Berita & Artikel',
      isActive: false,
    }
  },
  head() {
    return {
      title: this.title + ' - Muslimat Hidayatullah',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Berita dan Artikel Seputar Muslimat Hidayatullah Pusat, Wilayah, dan Internasional',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
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
.categories {
  position: relative;
  max-width: 100%;
  height: max-content;
  overflow-x: auto;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 1rem 0;
  a.cat-btn {
    display: flex;
    width: max-content;
    height: max-content;
    max-width: none;
    padding: 8px 1rem;
    margin: 0 0.7rem;
    font-size: 16px;
    text-decoration: none;
    color: rgb(73, 73, 73);
    border-radius: 16px;
    // background: #ffff;
    border: 1px solid #0c4524;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #d3f3e0;
    }
    &.nuxt-link-exact-active,
    &.nuxt-link-active {
      background: #b2e2c5;
      font-weight: 500;
      color: #000;
    }
  }
}

@media all and (max-width: 768px) {
  .categories {
    justify-content: flex-start;
    a.cat-btn {
      padding: 4px 0.7rem;
      margin: 0 0.25rem;
      font-size: 14px;
    }
  }
}
.p-b-2 {
  padding-bottom: 2rem !important;
}
</style>
