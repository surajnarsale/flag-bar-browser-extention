import { defineStore } from "pinia";

export const useTabsStore = defineStore("tabs-store", {
  state: () => ({
    tabs: [] as any[],
  }),
  actions: {
    async fetchAllTabs() {
      await chrome.tabs.query({}, (tabs) => {
        this.tabs = tabs;
      });
    },
  },
});
