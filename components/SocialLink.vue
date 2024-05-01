<template>
<a
  class="
    inline-block px-6 py-2 bg-transparent  rounded-lg cursor-pointer
    bg-warm-gray-200
    dark:bg-warm-gray-800
    hover:opacity-85
  "
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