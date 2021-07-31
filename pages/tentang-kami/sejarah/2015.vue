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
      title: 'Musyawarah Nasional ke IV',
      imagesejarah: '/images/sejarah-2015.jpg',
      tanggal: '2015',
      content:
        '<p>Musyawarah Nasional IV Muslimah Hidayatullah (Mushida) digelar di Kampus Pesantren Ar-Rohmah Putri Malang, Jawa Timur. Pada Munas tersebut, <b>Reni Susilowati</b> kembali diamanahi sebagai Ketua Umum dan <b>Leny Syahnidar Djamil</b> sebagai Sekretaris Jenderal untuk periode 2015-2020',
    }
  },
}
</script>

<style></style>
