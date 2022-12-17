<template>
  <div v-if="modalActive == true" class="modal-ads">
    <figure class="modal-container">
      <button class="close" type="button" @click="modalAction">
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32.8278" cy="32.9139" r="32" fill="white" />
          <path
            d="M21.4494 42.7377L23.5881 44.8764L35.5506 32.9139L23.5881 20.9514L21.4494 23.0902L31.2731 32.9139L21.4494 42.7377H21.4494Z"
            fill="#0C4524"
          />
          <path
            d="M45.3009 42.7377L43.1621 44.8764L31.1996 32.9139L43.1621 20.9514L45.3009 23.0902L35.4771 32.9139L45.3009 42.7377V42.7377Z"
            fill="#0C4524"
          />
        </svg>
      </button>
      <picture>
        <!-- Medium screen / tablet landscape / desktop -->
        <source
          media="(min-width: 60em)"
          srcset="/images/iklan-kaos-kaki-desktop.jpg"
        />
        <!-- Small screen / tablet portrait -->
        <source
          media="(min-width: 40em)"
          srcset="/images/iklan-kaos-kaki-desktop.jpg"
        />
        <!-- Extra Small screen / phone -->
        <source srcset="/images/iklan-kaos-kaki-mobile.jpg" />
        <!-- Fallback -->
        <img
          src="/images/iklan-kaos-kaki-desktop.jpg"
          alt="Iklan Kaos Kaki Coklat Telapak Hitam Mushida"
          class="modal-image"
        />
      </picture>
      <a
        target="blank_"
        href="https://wa.me/6289648942171"
        rel="noreferrer noopener"
        class="btn-link"
        >Pesan Sekarang</a
      >
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalActive: false,
      modalCount: 1,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.modalScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.modalScroll)
  },
  methods: {
    modalScroll() {
      if (scrollY > 1000 && this.modalCount > 0) {
        this.modalActive = true
        this.modalCount = 0
      }
    },
    modalAction() {
      if (this.modalActive === true) {
        this.modalActive = false
        this.modalCount = 0
      } else {
        this.modalActive = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@-webkit-keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.animate__fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
.modal-ads {
  position: fixed;
  bottom: 24px;
  right: 0;
  z-index: 1000;
  width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-delay: 0s;
  animation-name: bounceInUp;
  animation-duration: 0.3s;
  .modal-container {
    display: flex;
    width: auto;
    max-width: 312px;
    height: auto;
    position: relative;
    box-shadow: 0px 36px 56px rgb(0 0 0 / 70%);
    animation-delay: 0s;
    animation-name: bounceInUp;
    animation-duration: 0.6s;
    .modal-image {
      width: 100%;
      height: 100%;
    }
    .close {
      position: absolute;
      left: auto;
      right: -1.5rem;
      top: -1.5rem;
      border-radius: 3rem;
      width: 4rem;
      height: 4rem;
      padding: 0;
      margin: 0;
      outline: 0;
      border: 0;
      cursor: pointer;
      box-shadow: 0px 4px 50px -10px rgb(0 0 0 / 40%);
    }
    .btn-link {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      font-size: 16px;
      padding: 1rem 1.5rem;
      border-radius: 4rem;
      background: #0c4524;
      color: #fff;
      text-decoration: none;
    }
  }
}
@media all and (max-width: 999px) {
  .modal-ads {
    .modal-container {
      .btn-link {
        bottom: 0.7rem;
        right: 0.7rem;
        font-size: 14px;
        padding: 0.7rem 1rem;
      }
      .close {
        width: 3rem;
        height: 3rem;
        top: -1rem;
        right: -1rem;
        svg {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
}
</style>
