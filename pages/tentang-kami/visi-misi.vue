<template>
  <main class="visi-misi">
    <Nav />
    <HeroSub :imgurl="imgurl" :title="title" :directory="directory" />
    <section>
      <div class="section-container">
        <h2>Visi</h2>
        <blockquote>
          Membangun Keluarga Qur’ani Menuju Peradaban Islam
        </blockquote>
        <h2>Misi</h2>
        <p>
          Misi Mushida adalah ridha Allah subhanahu wa ta’ala yang diupayakan
          melalui
        </p>
        <ol>
          <li>Melahirkan kader-kader muslimat yang berkualitas</li>
          <li>Mewujudkan keluarga qur’ani</li>
          <li>
            Mewujudkan kekuatan muslimat dalam bidang pendidikan, dakwah,
            sosial, ekonomi dan lain- lain secara profetik dan profesional
          </li>
          <li>
            Membangun sinergi dengan komponen umat Islam dalam gerakan amar
            ma’ruf nahi munkar.
          </li>
          <li>Membangun komunitas Islami</li>
          <li>
            Mengajak pemerintah dan segenap bangsa Indonesia untuk mewujudkan
            NKRI yang unggul dan bermartabat
          </li>
        </ol>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
export default {
  data() {
    return {
      imgurl: '/images/herovisi.jpg',
      title: 'Visi & Misi',
      directory: 'Home / Tentang Kami',
    }
  },
  head() {
    return {
      title: this.title + ' - Muslimat Hidayatullah',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Visi dan Misi Muslimat Hidayatullah yang dipegang oleh Mushida untuk sekarang dan masa depan.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.visi-misi {
  section {
    background: linear-gradient(
      180deg,
      rgba(238, 255, 249, 0.18) 0%,
      rgba(59, 113, 81, 0.18) 100%
    );
  }
  .section-container {
    padding-top: 0;
  }
  h2 {
    margin-bottom: 2rem;
    &:nth-child(3) {
      margin-top: 2rem;
    }
  }
  blockquote {
    font-size: calc(10px + 0.6vw);
  }
}
</style>
