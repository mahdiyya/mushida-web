<template>
  <nav :class="{ scrolled: isScrolled }">
    <NuxtLink to="/" class="logo">
      <img
        src="/images/logo-mushida.png"
        alt="logo muslimat hidayatullah"
        class="default"
      />
      <img
        src="/images/logo-mushida-full-white.png"
        alt="logo mushida white"
        class="white"
      />
    </NuxtLink>
    <div class="ham-container" @click="menucontainer()">
      <div id="nav-icon3" :class="{ open: isOpen }">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
    <div class="nav-container row" :class="{ open: isOpen }">
      <NuxtLink class="nav-link animate" to="/">Beranda</NuxtLink>
      <div class="dropdown">
        <span class="nav-link animate">Tentang Kami</span>
        <div class="dropdown-container">
          <NuxtLink to="/tentang-kami/visi-misi">
            Visi Misi
          </NuxtLink>
          <NuxtLink to="/tentang-kami/piagam-gunung-tembak">
            Piagam Gunung Tembak
          </NuxtLink>
          <NuxtLink to="/tentang-kami/sejarah">
            Sejarah
          </NuxtLink>
        </div>
      </div>
      <div class="dropdown">
        <span class="nav-link animate">Struktur Organisasi</span>
        <div class="dropdown-container">
          <NuxtLink to="/struktur-organisasi/majelis-penasihat">
            Majelis Penasihat
          </NuxtLink>
          <NuxtLink to="/struktur-organisasi/majelis-murobbiya-pusat">
            Majelis Murobbiyah Pusat
          </NuxtLink>
          <NuxtLink to="/struktur-organisasi/pengurus-pusat">
            Pengurus Pusat
          </NuxtLink>
          <NuxtLink to="/struktur-organisasi/pengurus-wilayah">
            Pengurus Wilayah
          </NuxtLink>
        </div>
      </div>
      <a
        class="nav-link animate"
        href="https://dapada.mushida.org/"
        rel="noreferrer noopener"
        >Data Paud/TK</a
      >
      <NuxtLink class="nav-link animate" to="/berita"
        >Berita dan Artikel</NuxtLink
      >
      <NuxtLink class="nav-link animate" to="/kontak">Kontak Kami</NuxtLink>
      <span
        id="search"
        class="nav-link"
        :class="{ active: isActive }"
        @click="activeform"
      >
        <img src="/images/search.svg" alt="search button" class="icon-search" />
        <img src="/images/close.svg" alt="close button" class="icon-close" />
      </span>
    </div>
    <form
      :action="`/search/result/redirect/${searchvalue}`"
      class="search-bar"
      :class="{ show: isActive }"
      @submit="
        () => {
          addItem(searchvalue)
        }
      "
    >
      <input
        v-model="searchvalue"
        type="text"
        class="search-form"
        placeholder="Ketik kata pencarian"
        required=""
      />
    </form>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      hover: false,
      isScrolled: false,
      isActive: false,
      isOpen: false,
      searchvalue: '',
    }
  },
  computed: {
    value() {
      return this.$store.state.searchvals.value
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      if (scrollY > 10) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    },
    activeform() {
      if (this.isActive === true) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    },
    menucontainer() {
      if (this.isOpen === true) {
        this.isOpen = false
      } else {
        this.isOpen = true
      }
    },
    ...mapMutations(['addItem']),
  },
}
</script>

<style lang="scss" scoped></style>
