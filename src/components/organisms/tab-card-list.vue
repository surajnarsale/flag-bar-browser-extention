<script setup lang="ts">
import { computed } from "vue";
import { useTabsStore } from "../../store/tabs";
import TabCard from "../molecules/tab-card.vue";

const tabsStore = useTabsStore();

const allUrls = computed(() => {
  const urls: string[] = [];

  chrome.tabs.query({}, (tabs) => {
    tabs.forEach(function (tab) {
      tab.url ? urls.push(tab.url) : null;
    });
  });
  console.log("urls", urls);

  return urls;
});
</script>

<template>
  <div>
    {{ allUrls }}
    <ul role="list" class="">
      <TabCard
        v-for="tab in tabsStore.tabs"
        :key="tab.name"
        :name="tab.name"
        :image="tab.image"
      />
    </ul>
  </div>
</template>

<style scoped></style>
