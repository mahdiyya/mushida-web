<template>
  <section>
    <div class="section-container chart-org">
      <h2>{{ data[idRegion].provinces[slug].name }}</h2>
      <div class="head  middle bottom">
        <p class="label">
          {{ data[idRegion].provinces[slug].ketua }} <span>Ketua</span>
        </p>
      </div>
      <div class="member">
        <ul class="members two p-t-0">
          <li class="ceiling middle top">
            <p class="label green cap">
              {{ data[idRegion].provinces[slug].sekretaris }}
              <span>Sekretaris</span>
            </p>
          </li>
          <li class="ceiling middle top">
            <p class="label green cap">
              {{ data[idRegion].provinces[slug].bendahara }}
              <span>Bendahara</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="member">
        <ul class="members p-t-0">
          <li
            v-if="data[idRegion].provinces[slug].dakwah !== null"
            class="ceiling middle top"
          >
            <p class="label cap">
              {{ data[idRegion].provinces[slug].dakwah }}
              <span>Departemen Dakwah</span>
            </p>
          </li>
          <li
            v-if="data[idRegion].provinces[slug].pembinaan !== null"
            class="ceiling middle top"
          >
            <p class="label cap">
              {{ data[idRegion].provinces[slug].pembinaan }}
              <span>Departemen Pembinaan</span>
            </p>
          </li>
          <li
            v-if="data[idRegion].provinces[slug].sosial !== null"
            class="ceiling middle top"
          >
            <p class="label cap">
              {{ data[idRegion].provinces[slug].sosial }}
              <span>Departemen Sosial</span>
            </p>
          </li>
          <li
            v-if="data[idRegion].provinces[slug].ekonomi !== null"
            class="ceiling middle top"
          >
            <p class="label cap">
              {{ data[idRegion].provinces[slug].ekonomi }}
              <span>Departemen Ekonomi</span>
            </p>
          </li>
          <li
            v-if="data[idRegion].provinces[slug].organisasi !== null"
            class="ceiling middle top"
          >
            <p class="label cap">
              {{ data[idRegion].provinces[slug].organisasi }}
              <span>Departemen Organisasi</span>
            </p>
          </li>
          <li
            v-if="data[idRegion].provinces[slug].keputrian !== null"
            class="ceiling middle top"
          >
            <p class="label cap">
              {{ data[idRegion].provinces[slug].keputrian }}
              <span>Departemen Keputrian</span>
            </p>
          </li>
          <li
            v-if="data[idRegion].provinces[slug].pengkaderan !== null"
            class="ceiling middle top"
          >
            <p class="label cap">
              {{ data[idRegion].provinces[slug].pengkaderan }}
              <span>Departemen Pengkaderan</span>
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
</template>

<script>
import { regiondata } from '~/assets/data.js'
export default {
  async asyncData({ params }) {
    const idRegion = await params.region
    const slug = params.slug
    return { idRegion, slug }
  },
  data() {
    return {
      data: regiondata,
    }
  },
}
</script>

<style>
h2 {
  color: #093019;
  font-weight: 900;
}
</style>
