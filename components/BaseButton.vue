<template>
<NuxtLink
  class="inline-block px-6 py-2 bg-teal-600 text-light-400 rounded-full cursor-pointer hover:bg-emerald-600 hover:shadow-2xl shadow-emerald-700"
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