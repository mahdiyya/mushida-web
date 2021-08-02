<template>
  <main class="sejarah">
    <Nav />
    <HeroSub :imgurl="imgurl" :title="title" :directory="directory" />
    <section>
      <div class="section-container chart-org">
        <div class="head  middle bottom">
          <p class="label">Hani Akbar, S.Sos.I. <span>Ketua</span></p>
        </div>
        <div class="member">
          <ul class="members two p-t-0">
            <li class="ceiling middle top">
              <p class="label green cap">
                Dra. Leny Syahnidar Djamil <span>Sekretaris Jendral</span>
              </p>
            </li>
            <li class="ceiling middle top">
              <p class="label green cap">
                Rahma Elhalimiyah, S.Sos.I. <span>Bendahara</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="member">
          <ul class="members p-t-0">
            <li class="ceiling middle top bidang">
              <p class="label green cap">
                Siti Sarah Zakiyah, S.Pd.I. <span>Ketua Bidang Tarbiyah</span>
              </p>
              <p class="label small middle top">Departemen</p>
              <ul class="members p-t-0 bidang">
                <li class="middle top bidang">
                  <p class="label cap">
                    Zahratun Nahdhah, S.H.I.
                    <span>Ketua Dep. Pengkaderan</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Marsiti, S.Pd.I.
                    <span>Ketua Dep. Pembinaan Anggota</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Ruspayanti, S.Pd.I.
                    <span>Ketua Dep. Pendidikan</span>
                  </p>
                </li>
              </ul>
            </li>
            <li class="ceiling middle top bidang">
              <p class="label green cap">
                Neny Setiawaty, S.S., M.Pd
                <span>Ketua Bidang Pelayanan Ummat</span>
              </p>
              <p class="label small middle top">Departemen</p>
              <ul class="members p-t-0 bidang">
                <li class="middle top bidang">
                  <p class="label cap">
                    Sudaryani, S.Ag.
                    <span>Ketua Dep. Dakwah</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Saidah AS.
                    <span>Ketua Dep. Sosial</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Ina Sriwahyuni, S.Pd.
                    <span>Ketua Dep. Ekonomi</span>
                  </p>
                </li>
              </ul>
            </li>
            <li class="ceiling middle top bidang">
              <p class="label green cap">
                Dede Agustina, A.Md.
                <span>Ketua Bidang Organisasi</span>
              </p>
              <p class="label small middle top">Departemen</p>
              <ul class="members p-t-0 bidang">
                <li class="middle top bidang">
                  <p class="label cap">
                    Hapseni Dirwan, S.H.I.
                    <span>Ketua Dep. Organisasi</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Halimatusa Adia, S.H.I., M.H.
                    <span>Ketua Dep. Sumber Daya Insani</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Muthiah Najwati, S.H.I.
                    <span>Ketua Dep. Keputrian</span>
                  </p>
                </li>
                <li class="middle top bidang">
                  <p class="label cap">
                    Muthiah Najwati, S.H.I.
                    <span>Ketua Dep. Antar Lembaga</span>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="member">
          <p class="label small">Kesekretariatan</p>
          <ul class="members">
            <li class="ceiling middle top">
              <p class="label cap">
                Arsyis Musyahadah, S.H.I., M.Pd.I. <span>Biro Humas</span>
              </p>
            </li>
            <li class="ceiling middle top">
              <p class="label cap">
                Fiqih Ulyana, S.H.I. <span>Kepala Kantor</span>
              </p>
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
