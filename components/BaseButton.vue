<template>
<NuxtLink
  class="
    inline-block px-6 py-2
    text-light-700 bg-red-500 opacity-60
    rounded-2xl cursor-pointer

    hover:(shadow-2xl transform -translate-y-0.3 shadow-warm-gray-500)"
  :to="to"
>
  {{ label }}
</NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
  label: string
}>()
</script>