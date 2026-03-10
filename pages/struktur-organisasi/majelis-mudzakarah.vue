<template>
  <main class="sejarah">
    <Nav />
    <HeroSub :imgurl="imgurl" :title="title" :directory="directory" />
    <section class="chart-org">
      <div class="section-container chart-container">
        <div class="head  middle bottom">
          <p class="label">Kurnia Irawati, S.Pd.I <span>Ketua</span></p>
        </div>
        <div class="member">
          <p class="label small">Anggota</p>
          <ul class="members">
            <li class="ceiling middle top">
              <p class="label no-cap">Ir. Amalia Husnah Bahar, M.M</p>
            </li>
            <li class="ceiling middle top">
              <p class="label no-cap">Nur Iryani, S.Pd.I</p>
            </li>
            <li class="ceiling middle top">
              <p class="label no-cap">Dede Agustina, A.Md</p>
            </li>
          </ul>
        </div>
        <p
          style="font-size: 12px;
    margin: 5rem 0; width:20rem; text-align: right; float:right;"
        >
          <i
            >Mohon maaf bila terdapat kesalahan penulisan nama dan gelar. Untuk
            koreksi, silahkan hubungi Humas Mushida untuk keterangan lebih
            lanjut.</i
          >
        </p>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
export default {
  data() {
    return {
      imgurl: '/images/majelis.jpg',
      title: 'Majelis Mudzakarah',
      directory: 'Home / Struktur Organisasi',
      isActive: false,
    }
  },
  head() {
    return {
      title: this.title + ' - Muslimat Hidayatullah',
    }
  },
  methods: {
    isActiveNav() {
      if (this.isActive === true) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
