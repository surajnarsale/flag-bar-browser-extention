<script setup lang="ts">
defineProps({
  name: String,
  image: String,
});
</script>

<template>
  <li class="my-4 flex rounded-md border border-solid border-gray-200 py-1">
    <img class="h-5 w-5 rounded-full" :src="image" alt="" />
    <div class="m-auto ml-3 bg-blue-400">
      <p class="text-sm font-medium text-gray-900">{{ name }}</p>
      <!-- <p class="text-sm text-gray-500">{{ tab.name }}</p> -->
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
