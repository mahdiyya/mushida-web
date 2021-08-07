<template>
  <main class="sejarah">
    <Nav />
    <HeroSub :imgurl="imgurl" :title="title" :directory="directory" />

    <div class="section-container p-t-2">
      <div class="row">
        <p>Pilih Pengurus Wilayah yang ingin ditampilkan</p>
        <div class="select-container">
          <select v-model="selected" name="regions">
            <option
              v-for="region in regions"
              :key="region.id"
              :value="region.id"
              ><span>{{ region.name }}</span></option
            >
          </select>
        </div>
        <div
          class="selector"
          :class="{ active: isSelected }"
          @click="selectProvince()"
        >
          <span>{{ selectedProvince }}</span>
          <div class="dropdown-container">
            <NuxtLink
              v-for="(province, index) in regions[selected].provinces"
              :key="province.id"
              :data="province.id"
              :to="`/struktur-organisasi/pengurus-wilayah/${selected}/${index}`"
            >
              {{ province.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <NuxtChild />
    <Footer />
  </main>
</template>

<script>
import { regiondata } from '~/assets/data.js'
export default {
  data() {
    return {
      imgurl: '/images/hero-pw.jpg',
      title: 'Pengurus Wilayah',
      directory: 'Home / Struktur Organisasi',
      isActive: false,
      regions: regiondata,
      selected: 0,
      isSelected: false,
      selectedProvince: 'Pilih Provinsi',
      ProvinceName: '',
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
    selectProvince() {
      if (this.isSelected === true) {
        this.isSelected = false
      } else {
        this.isSelected = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.section-container {
  padding-bottom: 2rem;
}
.row {
  align-items: center;
  p {
    margin-bottom: 0;
  }
}
select {
  appearance: none;
  font-size: 18px;

  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 4px 2px 1px;
    font-size: 18px;
    color: #404040;
  }
}

select > option {
  appearance: none;
  padding: 4px 2px 1px;
}
.selector {
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 2rem;
  span {
    font-size: 18px;
  }
  .dropdown-container {
    position: absolute;
    top: 100%;
    left: 0;
    width: 140%;
    perspective: 1000px;
    z-index: 400;
    border: 1px solid #404040;
    opacity: 0;
    box-shadow: 0px 3px 27px -14px rgba(0, 0, 0, 0.77);
    transition: box-shadow 0.5s 0.5s ease-in-out;
    a {
      height: max-content;
      min-height: unset !important;
      max-height: none !important;
      text-decoration: none;
      padding: 1rem;
      padding: 4px 24px 4px;
      display: none;
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      background: #184e2f;
      background-color: #fff;
      color: #404040;
      border: 1px solid #0000;
      transform-origin: top center;
      transition: all 0.3s ease-in-out;
    }
    &.active {
      a {
        display: block;
      }
    }
  }
  &.active {
    .dropdown-container {
      opacity: 1;
      a {
        display: flex;
        box-shadow: 0px 26px 60px -14px rgba(0, 0, 0, 0.2);
        flex-wrap: wrap;
        &:hover {
          background: #8be2ba;
          padding-left: 1.2rem;
        }
      }
    }
  }
}

.selector span,
select {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  padding: 1rem 1.5rem;
  padding-right: 3rem;
  border-radius: 3rem;
  background: #ffffff;
  border: 2px solid #2d5b40;
  font-size: 20px;
  font-weight: 800;
  &::after {
    content: '';
    position: absolute;
    right: 1rem;
    top: 50%;
    width: 18px;
    height: 18px;
    transform: translateY(-50%);
    background-image: url(/images/arrow-full-bottom.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.select-container {
  position: relative;
  width: max-content;
  height: max-content;
  margin: 0 2rem;
  &::after {
    content: '';
    position: absolute;
    right: 1.5rem;
    top: 50%;
    width: 18px;
    height: 18px;
    transform: translateY(-50%);
    background-image: url(/images/arrow-full-bottom.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
}

@media all and (max-width: 768px) {
  .selector span,
  select {
    font-size: 14px;
    padding: 0.5rem 1.5rem;
    margin: 0;
    width: 216px;
  }
  .selector,
  .select-container {
    margin: 0;
    margin-bottom: 1rem;
  }
  .selector span::after,
  .select-container::after {
    right: 0.5rem;
  }
  .row {
    flex-direction: column;
    p {
      margin-bottom: 1rem;
      text-align: center;
    }
  }
}
</style>
