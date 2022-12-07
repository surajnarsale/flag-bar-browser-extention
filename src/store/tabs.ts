import { defineStore } from "pinia";

export const useTabsStore = defineStore("tabs-store", {
  state: () => ({
    tabs: [] as any[],
  }),
  actions: {
    fetchAllTabs() {
      chrome.tabs.query({}, (tabs) => {
        this.$state.tabs = tabs;
      });
    },
  },
});
