<template>
  <NuxtPage class="page  min-h-full" />
  <!-- <div class="bg-light-300 min-h-full">
  </div> -->
</template>

<style>
html, body, #__nuxt, .page {
  min-height: 100%;
  height: 100%;
}

/* ----------- colors --------- */

:root {
  --c-section-border: hsl(0deg 0% 96%);
}

.selected {
  /* background-color: bisque; */
  background-color: hsl(0deg 100% 84%);
}

.section-tags {
  background-color: hsl(315deg 22% 74%);
  background-color: hsl(315deg 18% 67%);
  
  background-color: cadetblue;
  
  background-color: hsl(212deg 15% 83%);
  background-color: hsl(212deg 16% 80%);

  border-bottom: 3px solid var(--c-section-border);
}

.message {
  background-color: var(--c-section-border);
}

/* .card {
  @apply border-2 border-transparent;
} */
.card {
  background-color: hsl(216deg 16% 90%);
  color: #333;
}

.card:hover {
  /* background-color: hsl(260deg 17% 93%); */
  background-color: hsl(0deg 0% 98%);
  background-color: hsl(216deg 14% 95%);

  /* @apply bg-light-600 border-light-900; */
  /* border: 2px solid hsl(216deg 14% 90%); */
}

html {
  background-color: hsl(266deg 16% 82%);
  
  @apply bg-light-700;
}

</style>