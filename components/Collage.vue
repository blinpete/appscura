<template>
<div class="collage fixed bottom-8 left-0 px-20 flex flex-row flex-wrap gap-20 justify-center">
  <TagList class="flex justify-center">
    <Tag
      v-for="t in tags"
      class="!bg-transparent !shadow-none !opacity-40 text-[#474e54] dark:text-[#cdbaba] cursor-default hover:(transform scale-103)"
    >#{{ t }}</Tag>
  </TagList>
</div>
</template>

<script lang="ts" setup>
import { tags } from '~~/src/tags';
</script>

<style scoped>
@media screen and (max-width: 700px) {
  .collage {
    display: none;
  }
}
</style>
