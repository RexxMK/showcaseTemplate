<template>
  <div class="overview bg-primary h-screen">
    <IndexOverview v-bind="{ ...page.overview }" />
  </div>
</template>

<script setup>
import IndexOverview from "../components/IndexOverview.vue";
import pageData from "/pageData.json";

const page = ref(pageData.index);
</script>

<style scoped>
img {
  width: 330px;
}
</style>
