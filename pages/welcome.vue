<template>
  <main class="bg-light-900 flex">
    <div class="m-auto text-center z-10 flex flex-col justify-between items-center">
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