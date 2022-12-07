<script setup lang="ts">
import { computed, onMounted } from "vue";
import TwoColomnLayout from "./components/templates/two-colomn-layout.vue";

onMounted(() => {});

const allUrls = computed(() => {
  const urls: string[] = [];

  chrome.tabs.query({}, (tabs) => {
    tabs.forEach(function (tab) {
      tab.url ? urls.push(tab.url) : null;
    });
  });

  // return urls;
  return [
    "chrome://newtab/",
    "chrome://newtab/",
    "https://www.google.co.in/",
    "https://www.google.com/search?q=facebook&rlz=1C5CHFA_enIN983IN983&oq=facebook&aqs=chrome..69i57j0i131i433i512l2j0i512l3j0i131i433j0i131i433i512j0i512.1294j0j9&sourceid=chrome&ie=UTF-8",
    "https://www.google.com/search?q=twitter&rlz=1C5CHFA_enIN983IN983&oq=twitter&aqs=chrome.0.0i271j46i67i131i199i433i465j35i39j0i67i131i433l2j0i131i433i512j0i433i512j0i131i433i512j0i131i433i457i512j0i402.1035j0j1&sourceid=chrome&ie=UTF-8",
  ];
});
</script>

<template>
  <TwoColomnLayout />
</template>

<style scoped></style>
