<template>
<a
  class="
    card rounded-xl px-5 py-5 flex flex-col gap-1
    md:(px-7 gap-2)
    cursor-pointer
  text-cool-gray-600 bg-cool-gray-200
    transform shadow-md transition duration-200 ease-out
    hover:(-translate-y-0.5 shadow-xl)
  "
  :href="item.website"
  target="_blank"
  rel="noopener noreferrer"
>
  <div class="flex flex-row items-center justify-start gap-4">
    <img
      :src="`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.website}&size=256`"
      :alt="item.name"
      width="40"
      height="40"
      class="rounded-lg"
    >
    
    <h1 class="font-bold text-xl">{{ item.name }}</h1>
  </div>
  <p class="mb-2">{{ item.summary }}</p>
  <h1 class="text-md italic text-center text-gray-500 mt-auto mb-2">"{{ item.motto }}"</h1>
  <TagList class="pointer-events-none !gap-1.5 justify-end">
    <Tag class="bg-light-700 opacity-70 !shadow-none" v-for="t in item.tags" :key="t">#{{ t }}</Tag>
  </TagList>
</a>
</template>

<script lang="ts" setup>
import { Item } from '~~/src/items';

defineProps<{
  item: Item
}>()
</script>