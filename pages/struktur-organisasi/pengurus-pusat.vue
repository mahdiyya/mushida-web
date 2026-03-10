<template>
  <main class="sejarah">
    <Nav />
    <HeroSub :imgurl="imgurl" :title="title" :directory="directory" />
    <section class="chart-org">
      <div class="section-container chart-container">
        <div class="head  middle bottom">
          <p class="label">
            Ketua PP Mushida: Hani Akbar, S.Sos.I., M.Pd
            <span>Ketua</span>
          </p>
        </div>
        <div class="member main">
          <ul class="members two p-t-0">
            <li class="member members detach">
              <p class="label small">Kesekretariatan</p>
              <ul class="members">
                <li class="ceiling middle top">
                  <p class="label cap">
                    Arsyis Musyahadah, S.H.I., M.Pd.
                    <span>Wakil Sekretaris Jenderal</span>
                  </p>
                </li>
                <li class="ceiling middle top">
                  <p class="label cap">
                    Fiqhi Ulyana, S.H.I.
                    <span>Wakil Bendahara Umum</span>
                  </p>
                </li>
              </ul>
            </li>
            <li class="ceiling middle top sekjen">
              <p class="label green cap">
                Zahratun Nahdhah, S.H.I., M.Pd.
                <span class="with-bottom">Sekretaris Jenderal</span>
              </p>
            </li>
            <li class="ceiling middle top">
              <p class="label green cap">
                Rahmah El Halimiyah, S.Sos.I., M.Pd.
                <span class="with-bottom">Bendahara Umum</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="member bidang-main">
          <ul class="members p-t-0" style="flex-wrap: nowrap;">
            <li class="ceiling middle top bidang">
              <p class="label green cap">
                Hapseni Dirwan, S.H.I. <span>Kabid. Pendidikan</span>
              </p>
              <p class="label small middle top">Departemen</p>
              <ul class="members p-t-0 bidang">
                <li class="middle top bidang">
                  <p class="label cap">
                    Hapseni Dirwan, S.H.I.
                    <span>Kadept. PAUD (KB-TK), Day Care</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Andi Muliani, S.Pd.I.
                    <span>Kadept. Keluarga</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Santi Nurhasanah, M.Pd.
                    <span>Kadept. Pendidikan Kepengasuhan Putri</span>
                  </p>
                </li>
              </ul>
            </li>
            <li class="ceiling middle top bidang">
              <p class="label green cap">
                Saryati, S.H.I.
                <span>Kabid. Perkaderan dan Pembinaan Anggota</span>
              </p>
              <p class="label small middle top">Departemen</p>
              <ul class="members p-t-0 bidang">
                <li class="middle top bidang">
                  <p class="label cap">
                    Tuti Darawati, S.Th.I.
                    <span>Kadept. Rekrutmen</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Saryati, S.H.I.
                    <span>Kadept. Perkaderan dan Pembinaan Anggota</span>
                  </p>
                </li>
              </ul>
            </li>
            <li class="ceiling middle top bidang">
              <p class="label green cap">
                Sudaryani, S.Ag., S.E.
                <span>Kabid. Dakwah &amp; Pelayanan Umat</span>
              </p>
              <p class="label small middle top">Departemen</p>
              <ul class="members p-t-0 bidang">
                <li class="middle top bidang">
                  <p class="label cap">
                    Sudaryani
                    <span>Kadept. Dakwah</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Saidah
                    <span>Kadept. Sosial &amp; Kesehatan</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Ina Sriwahyuni, S.Pd.
                    <span>Kadept. Ekonomi</span>
                  </p>
                </li>
              </ul>
            </li>
            <li class="ceiling middle top bidang">
              <p class="label green cap">
                Wulan Sari, A.Md.
                <span>Kabid. Organisasi</span>
              </p>
              <p class="label small middle top">Departemen</p>
              <ul class="members p-t-0 bidang">
                <li class="middle top bidang">
                  <p class="label cap">
                    Asri Wulantini, S.Pd.
                    <span>Kadept. PPO dan SDI</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Mutiah Najwati, S.H.I., M.Pd.
                    <span>Kabid. Keputrian</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Nurul Qalbi, Lc., M.Pd.
                    <span>Kadept. Dakwah, Rekrutmen Putri</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Mutiah Najwati, S.H.I., M.Pd.
                    <span>Kadept. Pembinaan dan Perkaderan</span>
                  </p>
                </li>
              </ul>
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
      title: 'Pengurus Pusat',
      directory: 'Home / Struktur Organisasi',
      isActive: false,
    }
  },
  head() {
    return {
      title: this.title + ' - Muslimat Hidayatullah',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.title + ' - Muslimat Hidayatullah',
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.title + ' - Muslimat Hidayatullah',
        },
        {
          hid: 'og-site_name',
          property: 'og:site_name',
          content: 'mushida',
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: '/struktur-organisasi/pengurus-wilayah',
        },
      ],
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
