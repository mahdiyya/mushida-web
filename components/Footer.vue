<template>
  <footer>
    <div class="section-container grid">
      <div class="links">
        <p><strong>Links</strong></p>
        <ul>
          <li>
            <a target="blank_" href="" rel="noreferrer noopener">Annisa</a>
          </li>
          <li>
            <a
              target="blank_"
              href="https://hidayatullah.or.id/"
              rel="noreferrer noopener"
              >DPP Hidayatullah</a
            >
          </li>
          <li>
            <a
              target="blank_"
              href="https://hidayatullah.or.id/"
              rel="noreferrer noopener"
              >Grand MBA</a
            >
          </li>
          <li>
            <a target="blank_" href="" rel="noreferrer noopener"
              >Kolom Pengurus</a
            >
          </li>
          <li>
            <a target="blank_" href="" rel="noreferrer noopener"
              >Majelis Quran</a
            >
          </li>
          <li>
            <a
              target="blank_"
              href="https://www.pemudahidayatullah.or.id/"
              rel="noreferrer noopener"
              >Pemuda Hidayatullah
            </a>
          </li>
          <li>
            <a
              target="blank_"
              href="https://www.sarhidayatullah.com"
              rel="noreferrer noopener"
              >SAR Hidayatullah</a
            >
          </li>
          <li>
            <a target="blank_" href="" rel="noreferrer noopener"
              >Sirah Community</a
            >
          </li>
          <li>
            <a target="blank_" href="" rel="noreferrer noopener">TKA-PAUD</a>
          </li>
        </ul>
      </div>
      <address>
        <p><strong>Alamat</strong></p>
        <p>
          Gedung Pusat Dakwah Hidayatullah <br />
          Jln Cipinang Cempedak I/14 <br />
          Otista Polonia <br />
          Jatinegara <br />
          Jakarta Timur <br />
          Indonesia 13340 <br />
        </p>
      </address>
      <div class="contact">
        <p><strong>Contacts</strong></p>
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
          <a target="blank_" href="tel:(021) 8190049" rel="noreferrer noopener">
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
        <div class="row">
          <a
            target="blank_"
            href="https://www.facebook.com/MushidaOfficial/"
            rel="noreferrer noopener"
          >
            <img
              src="/images/facebook.svg"
              alt="facebook mushida"
              width="28"
              height="28"
            />
          </a>
          <a
            target="blank_"
            href="https://www.instagram.com/pp_mushida/"
            rel="noreferrer noopener"
            width="28"
            height="28"
          >
            <img
              src="/images/instagram.svg"
              alt="instagram mushida"
              width="28"
              height="28"
            />
          </a>
          <a
            target="blank_"
            href="https://www.youtube.com/channel/UCZ6X4sIuqObt06LYqOKQc_Q"
            rel="noreferrer noopener"
          >
            <img
              src="/images/youtube.svg"
              alt="youtube mushida"
              width="28"
              height="28"
            />
          </a>
          <a target="blank_" href="" rel="noreferrer noopener">
            <img
              src="/images/whatsapp.svg"
              alt="whatsapp mushida"
              width="28"
              height="28"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="copyright">
      © 2021 Muslimat Hidayatullah
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background: linear-gradient(180deg, #2d5b40 0%, #0c4524 100%);
  color: #fff !important;
  .section-container {
    padding-top: 4rem;
    padding-bottom: 0rem;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: calc(10px + 0.3vw);
  }
  strong {
    font-family: 'Playfair Display', serif;
    font-size: calc(12px + 1vw);
  }
  ul {
    padding-inline-start: 0;
    padding-left: 0;
    li {
      list-style: none;
      margin-bottom: 1rem;
    }
  }
  .grid {
    padding-bottom: 3rem;
    margin-bottom: 0;
    margin-top: 0;
    .links {
      ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 15rem;
      }
    }
    address {
      justify-self: self-end;
      font-size: calc(10px + 0.3vw);
      font-style: normal;
      span {
        margin-bottom: 1.2rem;
      }
      p {
        font-size: calc(10px + 0.3vw);
        line-height: 2;
        &:first-child {
          margin-bottom: 1.2rem;
          line-height: 1.2;
        }
      }
    }
    .contact {
      justify-self: self-end;
      p {
        margin-bottom: 1rem;
      }
      .row {
        margin-top: 1.5rem;
        img {
          width: 28px;
          height: 28px;
          margin-right: 1rem;
        }
      }
    }
  }
  .copyright {
    text-align: center;
    background-color: #fff;
    font-size: calc(10px + 0.3vw);
    color: #000;
    font-weight: 400;
    padding: 1rem;
  }
}
@media all and (max-width: 768px) {
  footer .grid address,
  footer .grid .contact {
    justify-self: self-start;
  }
  footer .grid {
    grid-gap: 1rem;
  }
}
</style>
