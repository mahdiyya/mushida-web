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
      title: 'Rakernas Mushida di Makassar',
      imagesejarah: '/images/sejarah-2006.jpg',
      tanggal: '2006',
      content:
        '<p>Rapat kerja nasional Muslimat Hidayatullah tahun 2006 dilaksanakan pada tanggal 8, 9 dan 10 April 2006 di Pondok Madina, Bumi Sudiang, Makassar, dihadiri oleh hampir 200 peserta yang terdiri dari pengurus PW dan PD seluruh Indonesia.</p><p>Dipilihnya semboyan "Membangun Peradaban Islam" sebagai ikon perjuangan, juga pencanangan beberapa program unggulan baru seperti Grand MBA (Mengajar Belajar Al Qurâan) dan pembentukan MTQ (Majelis Taâlim Qurâan) di daerah, memerlukan sosialisasi intensif agar dapat segera diaplikasikan menjadi sebuah program kerja nyata. Sosialisasi intensif tak bisa dilakukan hanya melalui media cetak maupun komunikasi telepon semata, melainkan harus melalui sebuah pertemuan besar bertajuk Rapat Kerja Nasional. Inilah landasan utama dilaksanakan Rakernas Mushida 2006 ini.</p>',
    }
  },
}
</script>

<style></style>
