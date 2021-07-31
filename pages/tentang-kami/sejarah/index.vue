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
      title: 'Muslimat Hidayatullah Didirikan',
      imagesejarah: '/images/sejarah-1.jpg',
      tanggal: '2000',
      content:
        '<p>Muslimat Hidayatullah (Mushida) adalah organisasi pendukung yang berinduk pada ormas Islam nasional Hidayatullah yang dideklarasikan pada tahun 2000 bertepatan dengan Musyawarah Nasional (Munas) Hidayatullah pertama di Gunung Tembak, Balikpapan, Kalimantan Timur.</p><p>Pada periode pertama kepemimpinan Mushida, dipimpin oleh <b>Sabriati Aziz</b> sebagai ketua umum dan sekjen <b>Irawati Istadi</b>.</p>',
    }
  },
}
</script>

<style></style>
