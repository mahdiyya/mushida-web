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
      title: 'Musyawarah Nasional ke III di Jakarta Ketua Umum Baru Dilantik',
      imagesejarah: '/images/sejarah-2010.jpg',
      tanggal: '2010',
      content:
        '<p>Musyawarah Nasional III Muslimah Hidayatullah (Mushida) digelar di Aula Utama Masjid Agung At-Tiin TMII melahirkan kepengurusan baru yang dipimpin oleh Ketua Umum Muslimah Hidayatullah <b>Reni Susilowati</b> dan Sekjen <b>Amaliah Husna Bahar</b>.</p> <p>Pada Munas III ini pula dibentuk badan baru yakni <b>Majelis Pertimbangan Pusat (MPP)</b> yang diketuai oleh <b>Shabriati Abdul Aziz</b> yang juga Ketua Umum Mushida pada periode sebelumnya.',
    }
  },
}
</script>

<style></style>
