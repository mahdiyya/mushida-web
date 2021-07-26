<template>
  <nav :class="navclass">
    <div class="logo">
      <img src="images/logo.png" alt="logo muslimat hidayatullah">
    </div>
    <div class="nav-row">
      <nuxt-link class="nav-link" :to="index">Beranda</nuxt-link>
      <div class="dropdown">
        Tentang Kami
        <div class="dropdown-container">
          <nuxt-link class="nav-link" :to="tentang - kami / sejarah">
            Beranda
          </nuxt-link>
          <nuxt-link class="nav-link" :to="tentang - kami / visi - misi">
            Visi Misi
          </nuxt-link>
          <nuxt-link class="nav-link" :to="tentang - kami / sejarah">
            Sejarah
          </nuxt-link>
          <nuxt-link
            class="nav-link"
            :to="tentang - kami / piagam - gunung - tembak"
          >
            Piagam Gunung Tembak
          </nuxt-link>
        </div>
      </div>
      <div class="dropdown">
        Struktur Organisasi
        <div class="dropdown-container">
          <nuxt-link
            class="nav-link"
            :to="struktur - organisasi / majelis - penasihat"
          >
            Majelis Penasihat
          </nuxt-link>
          <nuxt-link
            class="nav-link"
            :to="struktur - organisasi / majelis - murobbiya - pusat"
          >
            Majelis Murobbiyah Pusat
          </nuxt-link>
          <nuxt-link
            class="nav-link"
            :to="struktur - organisasi / pengurus - pusat"
          >
            Pengurus Pusat
          </nuxt-link>
          <nuxt-link
            class="nav-link"
            :to="struktur - organisasi / pengurus - wilayah"
          >
            Pengurus Wilayah
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navclass: {
      type: String,
      default: null
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
