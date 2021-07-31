<template>
  <main class="piagam">
    <Nav />
    <section>
      <img
        src="/images/outline-hidayatullah-group.svg"
        alt="icon outline hidayatullah"
        class="accessories"
        width="518"
        height="426"
      />
      <div class="section-container">
        <article class="card simple">
          <h1 class="text-center">PIAGAM GUNUNG TEMBAK</h1>
          <p class="text-center">
            <i><b>Bismillaahirrahmanirrahiim</b></i>
          </p>

          <ol>
            <li>
              Bahwa membangun Peradaban Islam adalah jihad bagi setiap orang
              yang beriman.
            </li>
            <li>
              Bahwa pusat Peradaban Islam adalah masjid. Oleh karena itu, setiap
              kader Hidayatullah wajib memakmurkan masjid sebagai pusat kegiatan
              ibadah, pusat pengembangan ilmu, pusat kebudayaan Islam, pusat
              pengembangan karakter dan kepemimpinan umat.
            </li>
            <li>
              Bahwa setiap kader Hidayatullah wajib melaksanakan shalat
              berjamaah di masjid, melazimkan shalat nawafil, terutama qiyamul
              lail, membaca al-Qur’an dan melaksanakan amalan ibadah sesuai
              dengan ketentuan syari’ah.
            </li>
            <li>
              Bahwa setiap kader Hidayatullah adalah generasi Rabbani yang wajib
              menghidupkan majelis ilmu, membangun tradisi keilmuan dan
              berdakwah menyebarkan Islam. Oleh karena itu kader Hidayatullah
              wajib berhalaqah sebagai sarana untuk melakukan transformasi ilmu,
              transformasi karakter dan transformasi sosial.
            </li>
            <li>
              Bahwa kader Hidayatullah harus menjadi generasi yang berkarakter,
              peduli, suka menolong, gemar berkorban, tawadhu’, militan,
              qana’ah, wara’ dan mengutamakan kehidupan akhirat.
            </li>
            <li>
              Bahwa setiap pemimpin dan kader Hidayatullah wajib menjadi teladan
              di tengah umat. Untuk itu setiap kader harus membangun soliditas
              jamaah dan ukhuwah Islamiyah.
            </li>
          </ol>
          <p>Gunung Tembak, Balikpapan, 24 Juni 2013</p>
          <p style="margin-top:2.5rem">
            Atas Nama Seluruh Jamaah dan Kader Hidayatullah
          </p>
          <ol class="crew">
            <li>Abdurrahman Muhammad (Pimpinan Umum)</li>
            <li>Hamim Thohari (Ketua Dewan Syura)</li>
            <li>Abdullah Ihsan (Ketua Majelis Pertimbangan Pusat)</li>
            <li>Abdul Mannan (Ketua Umum)</li>
          </ol>
        </article>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.piagam {
  section {
    padding-top: 5rem;
    background: #f4f8f6;
    .section-container {
      z-index: 3;
      position: relative;
    }
    .card {
      padding: 3rem 4rem;
      padding-top: 4.5rem;
      border-radius: 0;
    }
    .accessories {
      position: absolute;
      top: 2rem;
      right: -2vw;
      left: auto;
      width: 17vw;
      height: auto;
      z-index: 0;
    }
    h1 {
      // font-size: calc(18px + 1.3vw);
      color: #133421;
      margin-bottom: 2rem;
      font-weight: 900;
    }
    ol {
      margin: 3rem 0;
      padding-left: 16px;
      li {
        padding-left: 1rem;
        font-size: calc(11px + 0.35vw);
        line-height: 1.6;
        margin-bottom: 1.2rem;
        text-align: justify;
      }
    }
    .crew {
      margin-top: 0.5rem;
      li {
        margin-bottom: 0.5rem;
        padding-left: 0.5rem;
      }
    }
  }
}
</style>
