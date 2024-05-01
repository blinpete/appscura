<template>
<main ref="scrollerRef" class="overflow-y-auto">
<section class="
  bg-blue-gray-300 text-dark-300
  dark:(bg-dark-800 text-gray-300)
">
  <header class="
  flex justify-between w-full
  py-3 px-6
">
  <NuxtLink to="/welcome">
    <img src="/logo.png" alt="logo" width="30" height="30" class="logo rounded-md">
  </NuxtLink>

  <ThemeSelect 
    class="text-current flex p-2 hover:opacity-60"
  />
</header>
<section ref="taggerRef"
      class="
        section-tags
        px-10 pb-18 pt-6 min-h-2/5 flex flex-col gap-3 justify-center
        md:(px-40 pb-22 pt-10)
        xl:(px-80)
        2xl:(px-140 min-h-1/3)
      "
    >
      <TagList class="flex justify-center">
        <Tag
          v-for="t in tags"
          class="
            bg-light-400 text-cool-gray-600
            dark:(bg-dark-300 text-cool-gray-400)
            rounded-md py-0.15 px-3
          "
          :class="{
            selected: tagsFromQuery.has(t),
            disabled: !tagCounts.get(t),
            autoSelected: tagCounts.get(t) === null,
          }"
          @click="tagsFromQuery.has(t) ? goMinusTag(t) : goPlusTag(t)"
          :counter="tagCounts.get(t) || undefined"
          :close="tagsFromQuery.has(t)"
        >{{ t }}</Tag>
      </TagList>
    </section>
</section>
<main>
    <button
      v-show="!taggerIsVisible"
      class="
        bg-light-800 shadow-cool-gray-400
        dark:(bg-dark-500 shadow-gray-800 shadow-2xl)
        fixed right-6 bottom-8 rounded-full w-10 h-10 z-20 shadow
        hover:bottom-7.8
      "
      @click="jumpUp()"
    >
      <Icon name="uil:arrow-up" size="25" class="text-gray-400 dark:(text-warm-gray-600)"/>
    </button>

    

    <section class="
      cards
      px-3 py-15 grid gap-4 grid-cols-1
      md:(grid-cols-2 px-5)
      lg:px-20
      bg-light-700
      dark:(bg-dark-300)
      2xl:(grid-cols-3 px-35 gap-4)
      relative" v-if="filtered"
    >
      <div
        class="
          message rounded-2xl px-5 cursor-pointer border-2
          bg-[var(--c-section-border)]
          border-light-600 text-gray-500
          dark:(border-[var(--c-section-border)] text-gray-400)

          text-sm font-semibold absolute -top-3 right-1/2 transform translate-x-1/2
        "
        :class="{loading: false}"
      >
        <Loader class="loader" />
        <span>{{ filtered.size }} apps</span>
        <span
          v-if="hasFound"
          class="invisible absolute top-0 left-0 w-full"
          @click="goHome()"
        >Clear</span>
      </div>

      <template v-if="filtered.size">
        <Card v-for="item in filtered" :item="item" />
      </template>

      <div v-else class="fallback text-center rounded-xl text-gray-600 col-span-2 py-1 px-30">
        <h1 class="text-2xl mb-2">
          Wow, looks like you've spotted a missing point!
        </h1>
        <p>
          If you know an app matching your query, hit the button below.
        </p>
        <p>
          This is a community-driven collection so we appreciate your contribution.
        </p>
        <BaseButton class="mt-10" to="/contribute" label="Contribute"/>
      </div>
    </section>

    <footer class="
    bg-blue-gray-300 text-dark-300
  dark:(bg-dark-800 text-gray-300)  
      flex flex-col items-center justify-center py-8 font-medium relative
    ">
      <div class="links flex gap-2 text-gray-500">
        <SocialLink href="https://github.com/blinpete/appscura" label="source"/>
        <SocialLink
          href="https://github.com/blinpete/appscura/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFeature%5D"
          label="contribute"
        />
      </div>
    </footer>
</main>
</main>
</template>


<script lang="ts" setup>
// import { items } from '~~/src/items';
// import { tags } from '~~/src/tags';
import { tags } from '~~/src/tags';
import { queryToTags } from '~~/src/utils';

const route = useRoute()
const tagsFromQuery = computed(() => queryToTags(route.query))

const { filtered, tagCounts } = useFilter(tagsFromQuery)

// const hasFound = computed(() => [...Object.values(tagCounts.value)].some(Boolean))
const hasFound = computed(() => tagsFromQuery.value.size)

const {
  scrollerRef,
  targetRef: taggerRef,
  targetIsVisible: taggerIsVisible,
  jumpUp
} = useScrollTop()

function goPlusTag(t: string) {
  const tags = queryToTags(route.query)

  tags.add(t)

  navigateTo({
    path: '/',
    query: {tags: [...tags]}
  })
}

function goMinusTag(t: string | null) {
  if (!t) return
  
  const tags = queryToTags(route.query)
  tags.delete(t)

  navigateTo({
    path: '/',
    query: {tags: [...tags]}
  })
}

function goHome() {
  console.log("🚀 | goHome | goHome")

  navigateTo({path: '/'})
}
</script>

<style>
.loading .loader {
  display: block;
}
.message:hover .invisible {
  visibility: visible;
  width: 100%;
  background-color: inherit;
  border-radius: inherit;
  text-align: center;
}

</style>