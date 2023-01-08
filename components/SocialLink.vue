<template>
<a
  class="inline-block px-6 py-2 bg-transparent  rounded-lg cursor-pointer hover:bg-gray-300"
  target="_blank"
  rel="noopener noreferrer"
>
  {{ label }}
</a>
</template>

<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>