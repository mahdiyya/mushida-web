<template>
  <p class="date">
    <span>{{ date }}</span>
    <span v-if="month == '01'">Januari</span>
    <span v-else-if="month == '02'">Februari</span>
    <span v-else-if="month == '03'">Maret</span>
    <span v-else-if="month == '04'">April</span>
    <span v-else-if="month == '05'">Mei</span>
    <span v-else-if="month == '06'">Juni</span>
    <span v-else-if="month == '07'">Juli</span>
    <span v-else-if="month == '08'">Agustus</span>
    <span v-else-if="month == '09'">September</span>
    <span v-else-if="month == '10'">Oktober</span>
    <span v-else-if="month == '11'">November</span>
    <span v-else>Desember</span>
    <span>{{ year }}</span>
  </p>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: null,
    },
    month: {
      type: String,
      default: null,
    },
    year: {
      type: String,
      default: null,
    },
  },
}
</script>

<style></style>
