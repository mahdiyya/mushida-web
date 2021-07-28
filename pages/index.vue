<template>
  <main>
    <Nav class="homepage" />
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
    <section class="jati-diri">
      <img
        src="images/outline-hidayatullah-group.svg"
        alt="icon outline hidayatullah"
        class="accessories"
        width="518"
        height="426"
      >
      <article class="section-container">
        <h2 class="text-green">Jati Diri Hidayatullah</h2>
        <div class="grid">
          <div class="card simple">
            <div class="row">
              <img src="images/icon-wahyu.svg" alt="icon snw">
              <h3 class="text-green">Sistematika Wahyu</h3>
            </div>
            <p>
              Sebagai manhaj tarbiyah dan dakwah. Setiap kader diharapkan mampu
              membawa spirit Sistematika Wahyu dalam setiap dakwah yang
              digaungkan.
            </p>
          </div>
          <div class="card simple">
            <div class="row">
              <img src="images/icon-ahlusunah.svg" alt="icon ahlusunah">
              <h3 class="text-green">Ahlus Sunnah wal Jama'ah</h3>
            </div>
            <p>
              Setiap aktifitas Hidayatullah selalu membawa nilai utama perekatan
              ukhuwah. Nilai ini ejawantah dari peran kohesif Hidayatullah untuk
              dunia.
            </p>
          </div>
          <div class="card simple">
            <div class="row">
              <img src="images/icon=alharakah.svg" alt="icon alharakah">
              <h3 class="text-green">Al-Harakah Al-Jihadiyah</h3>
            </div>
            <p>
              Membangun Peradaban Islam, berpijak pada ajaran Al-Qur’an, dan
              bercermin pada kehidupan Rasulullah.
            </p>
          </div>
          <div class="card simple">
            <div class="row">
              <img src="images/icon-jamaah.svg" alt="icon imamah">
              <h3 class="text-green">Imamah & Jamaah</h3>
            </div>
            <p>
              Berjamaah sesungguhnya merupakan kecenderungan jiwa manusia. Untuk
              meraih suatu tujuan, sekumpulan manusia bersatu dalam sebuah
              jama'ah atau organisasi.
            </p>
          </div>
          <div class="card simple">
            <div class="row">
              <img src="images/icon-jamaatun.svg" alt="icon jamaah">
              <h3 class="text-green">Jama’atun Minal Muslimin</h3>
            </div>
            <p>
              Hidup secara berjamaah adalah satu-satunya cara yang memungkinkan
              setiap individu muslim mampu mengaktualkan fitrahnya.
            </p>
          </div>
          <div class="card simple">
            <div class="row">
              <img src="images/icon-wasathiyah.svg" alt="icon snw">
              <h3 class="text-green">Al- Wasathiyah</h3>
            </div>
            <p>
              Kader Hidayatullah tidak hanya menyeru umat manusia pada amar
              ma’ruf tetapi juga mencegahnya dari kemungkaran (nahi munkar).
            </p>
          </div>
        </div>
      </article>
    </section>
    <section class="about">
      <img
        src="images/masjid.svg"
        alt="masjid svg"
        class="accessories"
        width="396"
        height="486"
      >
      <article class="section-container row">
        <img
          src="images/tentang-kami.jpg"
          alt="masjid gunung tembak"
          width="400"
          height="450"
        >
        <div class="text text-white">
          <h2>Tentang Kami</h2>
          <p>
            Muslimat Hidayatullah (Mushida) adalah organisasi pendukung yang
            berinduk pada ormas Islam nasional Hidayatullah yang dideklarasikan
            pada tahun 2000 bertepatan dengan Musyawarah Nasional (Munas)
            Hidayatullah pertama di Gunung Tembak, Balikpapan, Kalimantan Timur.
          </p>
          <p>
            Mushida merupakan organisasi pendukung Hidayatullah, yang telah
            menjangkau seluruh provinsi dan memiliki Pengurus Wilayah (PW) serta
            ratusan Pengurus Daerah (PD) di seluruh Indonesia. Mushida bergerak
            dalam bidang dawah, pendidikan, sosial, ekonomi dengan fokus garapan
            adalah pemberdayaan wanita, keluarga dan anak.
          </p>
        </div>
      </article>
    </section>
    <section class="pengurus">
      <article class="section-container">
        <h2><span>Pengurus Tingkat Pusat</span> <br>Muslimat Hidayatullah</h2>
      </article>
    </section>
  </main>
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
  max-height: 1200px;
  width: 100%;
}

.jati-diri {
  background: #f4f8f6;
  .accessories {
    position: absolute;
    top: -7vw;
    right: -2vw;
    left: auto;
    width: 17vw;
    height: auto;
    z-index: 0;
  }
}

.about {
  .accessories {
    position: absolute;
    left: auto;
    top: auto;
    bottom: 0;
    right: 0;
    width: 396px;
    height: auto;
  }
  background: radial-gradient(
    101.18% 101.18% at 50% -1.18%,
    #427b5a 0%,
    #0c4524 100%
  );
  article {
    justify-content: space-between;
    align-items: center;
    padding: 10vh 6vw;
    img {
      width: 390px;
      height: 464px;
      object-fit: cover;
    }
  }
  .text {
    width: 60%;
    height: auto;
  }
}
</style>
