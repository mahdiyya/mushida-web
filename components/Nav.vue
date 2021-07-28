<template>
  <nav>
    <div class="logo">
      <img
        src="images/logo-mushida.png"
        alt="logo muslimat hidayatullah"
        class="default"
      >
      <img
        src="images/logo-mushida-full-white.png"
        alt="logo mushida white"
        class="white"
      >
    </div>
    <div class="nav-container row">
      <NuxtLink class="nav-link" to="/">Beranda</NuxtLink>
      <div class="dropdown">
        <span class="nav-link">Tentang Kami</span>
        <div class="dropdown-container">
          <NuxtLink class="nav-link" to="tentang-kami/sejarah">
            Sejarah
          </NuxtLink>
          <NuxtLink class="nav-link" to="tentang-kami/visi-misi">
            Visi Misi
          </NuxtLink>
          <NuxtLink class="nav-link" to="tentang-kami/sejarah">
            Sejarah
          </NuxtLink>
          <NuxtLink class="nav-link" to="tentang-kami/piagam-gunung-tembak">
            Piagam Gunung Tembak
          </NuxtLink>
        </div>
      </div>
      <div class="dropdown">
        <span class="nav-link">Struktur Organisasi</span>
        <div class="dropdown-container">
          <NuxtLink class="nav-link" to="struktur-organisasi/majelis-penasihat">
            Majelis Penasihat
          </NuxtLink>
          <NuxtLink
            class="nav-link"
            to="struktur-organisasi/majelis-murobbiya-pusat"
          >
            Majelis Murobbiyah Pusat
          </NuxtLink>
          <NuxtLink class="nav-link" to="struktur-organisasi/pengurus-pusat">
            Pengurus Pusat
          </NuxtLink>
          <NuxtLink class="nav-link" to="struktur-organisasi/pengurus-wilayah">
            Pengurus Wilayah
          </NuxtLink>
        </div>
      </div>
      <NuxtLink class="nav-link" to="berita">Berita dan Artikel</NuxtLink>
      <NuxtLink class="nav-link" to="kontak">Kontak Kami</NuxtLink>
      <span id="search" class="nav-link">
        <img src="images/search.svg" alt="search button">
      </span>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>
