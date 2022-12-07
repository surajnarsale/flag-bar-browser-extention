<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useTabsStore } from "../../store/tabs";
import TabCard from "../molecules/tab-card.vue";

const tabsStore = useTabsStore();

const allTabs = ref<any[]>([]);

onMounted(() => {
  chrome.tabs.query({}, (tabs) => {
    allTabs.value = tabs;
  });
});
</script>

<template>
  <div>
    {{ allTabs }}
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
