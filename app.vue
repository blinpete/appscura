<template>
  <Head>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <Title>Appscura</Title>
    <Meta name="description" content="Appscura. Community-driven curated collection of productivity apps.
"/>
    <Meta name="keywords" content="zettelkasten,kanban,todo,outliner,productivity,curated"/>
    <Meta name="robots" content="index, follow" />
    <Meta name="author" content="blinpete" />

    <Meta property="og:title" content="Community-driven curated collection of productivity apps." />
    <Meta property="og:description" content="Find your favourite." />
    <Meta property="og:image" content="https://appscura.vercel.app/preview.png" />
  </Head>
  <Body>
    <NuxtPage class="page min-h-full" />
  </Body>
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
.logo {
  box-shadow: 0 4px 10px 3px hsl(208deg 10% 68%);
}
.selected {
  /* background-color: bisque; */
  /* background-color: rgb(190, 223, 198); */
  background-color: hsl(0deg 100% 84%);
}

:not(.selected).disabled {
  background-color: hsl(217, 22%, 80%);
  pointer-events: none;
  color: hsl(217, 8%, 51%);
}

.section-tags {
  border-bottom: 3px solid var(--c-section-border);
}

html {
  @apply bg-blue-gray-300;
}


/* ----------------- dark mode ---------------- */


.dark:root {
  --c-section-border: hsl(0deg 0% 23%);
  /* --c-section-border: hsl(0deg 90% 40%); */
}
.dark {
  .logo {
    box-shadow: 0 4px 10px 3px hsl(208deg 15% 25%);
  }
  
  .selected {
    background-color: hsl(0, 36%, 52%);
    color: #111;
  }
  :not(.selected).disabled {
    background-color: hsl(210, 15%, 18%);
    pointer-events: none;
    color: hsl(210, 17%, 34%);
  }
  .section-tags {
    border-bottom: 3px solid var(--c-section-border);
  }
}

html.dark {
  /* background-color: var(--c-section-border); */
  @apply bg-dark-800;
}

/* ------------------------------------------- */

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