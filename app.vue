<template>
  <Head>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <Title>Appscura</Title>
    <Meta name="description" content="Appscura. Community-driven curated collection of productivity apps.
"/>
    <Meta name="keywords" content="zettelkasten,kanban,todo,outliner,productivity,curated"/>
    <Meta name="robots" content="index, follow" />
    <Meta name="author" content="blinpete" />
  </Head>
  <NuxtPage class="page min-h-full" />
</template>

<style>
html, body, #__nuxt, .page {
  min-height: 100%;
  height: 100%;
}
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* ----------- colors --------- */

:root {
  --c-section-border: hsl(0deg 0% 96%);
}

.selected {
  /* background-color: bisque; */
  /* background-color: rgb(190, 223, 198); */
  background-color: hsl(0deg 100% 84%);
}

:not(.selected).disabled {
  /* background-color: hsl(315deg 18% 67%); */
  background-color: rgb(211, 216, 223);
  pointer-events: none;
  color: rgb(109, 115, 126);
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
  box-shadow: 0 2px 8px 6px hsl(216deg 10% 90%);

  transition: background-color 0.3s ease-out;
}

html {
  background-color: hsl(266deg 16% 82%);
  
  @apply bg-light-700;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

@media only screen and (min-width: 1921px) {
  body {
    font-size: 1.2rem;
  }
}
</style>