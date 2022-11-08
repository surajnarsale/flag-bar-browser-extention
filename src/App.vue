<script setup lang="ts">
import { computed, ref, onMounted } from "vue";

const sdf = ref(1);

onMounted(() => {});

const allUrls = computed(() => {
  console.log("compute rerun");

  const urls: string[] = [];

  chrome.tabs.query({}, (tabs) => {
    tabs.forEach(function (tab) {
      tab.url ? urls.push(tab.url) : null;
    });
  });

  return urls;
});
</script>

<template>
  <div v-if="allUrls" class="bg-blue-400">
    <span v-for="url in allUrls">{{ url }}</span>
  </div>
</template>

<style scoped></style>
