<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useTabsStore } from "../../store/tabs";
import TabCard from "../molecules/tab-card.vue";

const tabsStore = useTabsStore();

onMounted(() => {
  tabsStore.fetchAllTabs();
});

const allTabs = computed(() => {
  const urls: string[] = [];

  tabsStore.tabs.forEach(function (tab) {
    tab.url
      ? urls.push({
          name: tab.title,
          image: tab.favIconUrl,
        })
      : null;
  });
  console.log("urls", urls);

  return urls;
});
</script>

<template>
  <div v-if="allTabs.length > 0">
    <ul role="list" class="">
      <TabCard
        v-for="tab in allTabs"
        :key="tab.name"
        :name="tab.name"
        :image="tab.image"
      />
    </ul>
  </div>
</template>

<style scoped></style>
