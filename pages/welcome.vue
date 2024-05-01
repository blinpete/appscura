<template>
  <main class="root flex">
    <div class="m-auto text-center text-warm-gray-700 dark:text-warm-gray-500 z-10 flex flex-col justify-between items-center">
      <div class="flex justify-center">
        <img src="/logo.png" alt="logo" width="60" height="60">
      </div>

      <div class="text-6xl font-bold mb-4">
        <h1>Appscura</h1>
      </div>
      <h2 class="max-w-4/5">Community-driven curated collection of anything you may need to stay organized</h2>
  
      <BaseButton to="/" label="Dive in" class="mt-8" />
      <Collage />
    </div>
  </main>
</template>

<style scoped>
.root {
  /* background: linear-gradient(15deg,hsl(204deg 13% 71%),hsl(204deg 6% 89%)); */
  /* background: linear-gradient(15deg,hsl(204deg 13% 71%),hsl(13, 12%, 86%)); */
  /* background: linear-gradient(14deg,hsl(204deg 10% 70%),hsl(13deg 19% 84%)); */
  background: linear-gradient(12deg,hsl(204deg 39% 88%),hsl(13deg 62% 93%));
}

.dark .root {
  /* background: radial-gradient(farthest-side at 100% 40px, hsl(13, 64%, 25%) 30%, hsl(0, 27%, 7%)); */
  background: radial-gradient(farthest-side at 100% 40px, hsl(13, 69%, 30%) 30%, hsl(0, 27%, 7%));
}
</style>