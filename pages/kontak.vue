<template>
  <main class="artikel">
    <Nav />
    <div class="hero">
      <img
        src="/images/hero-contact.jpg"
        alt="Kontak Kami"
        width="512"
        height="456"
        class="img-bg"
      />
      <div class="header">
        <p class="directory">Beranda / <strong>Kontak Kami</strong></p>
        <h1>Kontak Kami</h1>
        <div class="grid">
          <div class="card simple">
            <figure>
              <a
                href="https://www.google.com/maps/place/DPP+Hidayatullah/@-6.2374275,106.8712881,18z/data=!4m5!3m4!1s0x2e69f30cae38ff81:0x4db033a3621efa90!8m2!3d-6.2370539!4d106.8717552"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/images/map-dpp.jpg" alt="map dpp" />
              </a>
            </figure>
            <h2>Gedung Pusat Dakwah Hidayatullah</h2>
            <p>
              Jln Cipinang Cempedak I/14 Otista Polonia Jatinegara Jakarta Timur
              Indonesia 13340
            </p>
          </div>
          <div class="card simple">
            <figure>
              <a
                href="https://www.google.com/maps/place/Pondok+Pesantren+Hidayatullah+Depok/@-6.2374275,106.8712881,18z/data=!4m5!3m4!1s0x2e69eb724381e777:0xa04d2168e41f668e!8m2!3d-6.4411427!4d106.8222796"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/images/map-depok.jpg" alt="map dpp" />
              </a>
            </figure>
            <h2>Sekretariat II</h2>
            <p>
              Kampus Hidayatullah Depok Jln Raya Kalimulya RT. 01/05 Kota Depok
              Jawa Barat Indonesia 16413
            </p>
          </div>
          <div class="card simple">
            <h2>Kontak</h2>
            <p>
              <a
                target="blank_"
                href="mailto:muslimat@hidayatullah.id"
                rel="noreferrer noopener"
                >muslimat@hidayatullah.id
              </a>
            </p>
            <p>
              <a
                target="blank_"
                href="mailto:ppmushida@gmail.com"
                rel="noreferrer noopener"
                >ppmushida@gmail.com
              </a>
            </p>
            <p>
              Office :
              <a
                target="blank_"
                href="tel:(021) 8190049"
                rel="noreferrer noopener"
              >
                (021) 8190049
              </a>
            </p>
            <p>
              Mobile :
              <a
                target="blank_"
                href="tel:+62-81-34-6609-254"
                rel="noreferrer noopener"
              >
                +62-81-34-6609-254</a
              >
            </p>
            <p>
              <a
                target="blank_"
                href="mailto:muslimat@hidayatullah.id"
                rel="noreferrer noopener"
                >muslimat@hidayatullah.id
              </a>
            </p>
            <p>
              <a
                target="blank_"
                href="mailto:ppmushida@gmail.com"
                rel="noreferrer noopener"
                >ppmushida@gmail.com
              </a>
            </p>
            <p>
              Office :
              <a
                target="blank_"
                href="tel:(021) 8190049"
                rel="noreferrer noopener"
              >
                (021) 8190049
              </a>
            </p>
            <p>
              Mobile :
              <a
                target="blank_"
                href="tel:+62-81-34-6609-254"
                rel="noreferrer noopener"
              >
                +62-81-34-6609-254</a
              >
            </p>
          </div>
        </div>
      </div>
      <img
        src="/images/acc-pink.svg"
        alt="mushida"
        width="204"
        height="82"
        class="accessories"
      />
    </div>
    <!-- <section>
      <div class="section-container"></div>
    </section> -->
    <Footer />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 512px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background: transparent;
  padding: 0 6vw;
  padding-top: 22rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  .img-bg {
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    height: 444px;
    width: 100%;
  }
  .header {
    position: relative;
    color: #fff;

    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
    width: 1200px;
    max-width: 100%;
    z-index: 5;
    p {
      margin-bottom: 12px;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background-color: #184e2f;
      height: 20rem;
      width: 100%;
      z-index: -1;
    }
    .card {
      color: #000;
      padding: 2rem 1.5rem;
      h2 {
        font-size: 24px;
        margin-bottom: 1rem;
      }
      a {
        color: #000;
        text-decoration: none;
      }
      figure {
        position: relative;
        width: calc(100% + 3rem);
        height: 312px;
        overflow: hidden;
        margin-left: -1.5rem;
        margin-top: -2rem;
        margin-bottom: 2rem;
        a {
          display: flex;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .accessories {
    position: absolute;
    left: 3vw;
    top: 55%;
    width: 206px;
    height: auto;
  }
}

@media all and(min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .date {
    span {
      font-size: 18px !important;
    }
  }
  .artikel {
    article.blog {
      width: 80%;
      flex: 0 0 80%;
    }
  }

  .recommedation {
    width: 15%;
    flex: 0 0 15%;
  }
}
</style>
