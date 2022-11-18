<template>
  <SejarahContent
    :title="title"
    :imagesejarah="imagesejarah"
    :tanggal="tanggal"
    :content="content"
  />
</template>

<script>
export default {
  data() {
    return {
      title: 'Musyawarah Nasional ke V Virtual',
      imagesejarah: '/images/sejarah-2020.jpg',
      tanggal: '2020',
      content:
        '<p>Musyawarah Nasional V Muslimat Hidayatullah (Mushida) digelar secara virtual dengan menerapkan protokol kesehatan di Depok sebagai langkah menyiasati pandemi Covid-19. Acara ini mengusung tema "Konsolidasi Idiil, Wawasan dan Organisasi Demi Terwujudnya Standardisasi, Sentralisasi, dan Integrasi Sistemik," digelar secara virtual dengan pusat kegiatan di Pondok Pesantren Hidayatullah, Kota Depok, Jawa Barat, pada 12-14 Syaban 1442 H bertepatan dengan 26-28 Maret 2021.</p><p>Munas V menetapkan Kepengurusan Mushida Baru untuk periode 2020-2025 dengan Ketua Umum PP diamanahi kepada <b>Hani Akbar</b> dan Sekjen kepada <b>Leni Syahnidar Djamil</b>.</p>',
    }
  },
}
</script>

<style></style>
