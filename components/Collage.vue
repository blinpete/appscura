<template>
<div class="fixed bottom-8 left-0 px-20 flex flex-row flex-wrap gap-20 justify-center">
  <TagList class="flex justify-center">
    <Tag
      v-for="t in tags"
      class="!bg-transparent opacity-40 cursor-default"
    >#{{ t }}</Tag>
  </TagList>
</div>
</template>

<script lang="ts" setup>
import { tags } from '~~/src/tags';
</script>
