<template>
  <button class="tag relative">
    <slot />

    <div v-if="counter || close" class="
      tag__dot text-[0.65em]
      absolute z-5 -top-2.2 right-0.2 transform translate-x-1/2
      rounded-full px-1 min-w-4.2 min-h-4.2
      flex items-center justify-center
    ">
      <span v-if="close">&times;</span>
      <span v-else-if="counter !== undefined">{{ counter }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  counter?: number
  close?: boolean
}>()
</script>

<style>
.tag {
  --color-shadow: hsl(210, 7%, 66%);
}
.tag:not(.disabled), .tag.selected {
  transition-property: transform, box-shadow, opacity;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 0, 0, 1);
  box-shadow: 0 1px 2px 0px var(--color-shadow);
}
.tag:hover:not(.selected){
  z-index: 10;
  box-shadow: 0 3px 4px 0px var(--color-shadow);
  opacity: 0.9;
}
.selected {
  transform: translateY(1px);
}
.autoSelected:not(.selected) {
  transition-property: outline, transform;
  transition-timing-function: ease-in-out;
  
  /* background-color: hsl(0deg 100% 84%);
  opacity: 0.85; */
  outline: 0.32em solid hsl(215, 22%, 75%);
  
  transition-delay: 0.08s;
  transition-duration: 0.04s;
  /* transition-duration: 0.1s, 0.18s; */
  
  /* transform: rotateZ(0.8deg) translateY(-1px); */
  /* transform: translateY(-1px); */
}
.tag__dot {
  background-color: inherit;
}

.dark {
  .tag {
    --color-shadow: hsl(210, 1%, 0%);
  }

  .tag:hover:not(.selected){
    opacity: 0.75;
  }

  .autoSelected:not(.selected) {
    outline-color: hsl(0deg 1% 1%);
  }
}
</style>