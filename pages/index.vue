<template>
<main ref="scrollerRef" class="overflow-y-auto">
    <button
      v-show="!taggerIsVisible"
      class="bg-light-800 fixed right-6 bottom-8 rounded-full w-10 h-10 z-20 shadow shadow-cool-gray-400 hover:bottom-7.8"
      @click="jumpUp()"
    >
      <Icon name="uil:arrow-up" size="25" class="text-gray-400"/>
    </button>

    <section ref="taggerRef"
      class="
        section-tags bg-light-900 relative
        px-10 py-10 min-h-2/5 flex flex-col gap-3 justify-center 
        md:(px-40 py-20)
        xl:(px-80)
        2xl:(px-140 min-h-1/3)
      "
    >
      <NuxtLink to="/welcome" class="absolute top-4 left-4">
        <img src="/logo.png" alt="logo" width="30" height="30" class="rounded-md" style="box-shadow: 0 4px 10px 3px hsl(208deg 10% 68%);">
      </NuxtLink>

      <TagList class="flex justify-center">
        <Tag
          v-for="t in tags"
          :class="{selected: tagsArray.includes(t), disabled: !tagCounts?.[t]}"
          @click="tagsArray.includes(t) ? goMinusTag(t) : goPlusTag(t)"
          :counter="tagCounts?.[t]"
          :close="tagsArray.includes(t)"
        >{{ t }}</Tag>
      </TagList>
    </section>

    <section class="
      cards
      px-3 py-15 grid gap-4 grid-cols-1
      md:(grid-cols-2 px-5)
      lg:px-20
      2xl:(grid-cols-3 px-35 gap-4)
      relative" v-if="filtered">
      <div
        class="message rounded-2xl px-5 cursor-pointer bg-light-500 border-2 border-light-600 text-sm font-bold text-gray-500  absolute -top-3 right-1/2 transform translate-x-1/2"
        :class="{loading: pending}"
      >
        <Loader class="loader" />
        <span>{{ filtered.length }} apps</span>
        <span
          v-if="tagsArray.length"
          class="invisible absolute top-0 left-0 w-full"
          @click="goHome()"
        >Clear</span>
      </div>

      <template v-if="filtered.length">
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

    <footer class="bg-light-800 flex flex-col items-center justify-center py-8 font-medium relative">
      <div class="links flex gap-2 text-gray-400">
        <SocialLink href="https://github.com/blinpete/appscura" label="source"/>
        <SocialLink
          href="https://github.com/blinpete/appscura/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFeature%5D"
          label="contribute"
          class="!bg-gray-300 !hover:bg-light-600"
        />
      </div>
    </footer>
</main>
</template>


<script lang="ts" setup>
import { tags } from '~~/src/tags';
import { queryToTags } from '~~/src/utils';
import { useIntersectionObserver } from '@vueuse/core';

const route = useRoute()
const reactiveQuery = computed(() => route.query)
const tagsArray = computed(() => [...queryToTags(route.query)])

const { data, pending, error, refresh } = await useFetch('/api/count', {
  query: reactiveQuery,
})

const filtered = computed(() => data.value?.filtered)
const tagCounts = computed(() => data.value?.tagCounts)


const scrollerRef = ref<HTMLElement | null>()
const taggerRef = ref()
const taggerIsVisible = ref(true)

const {} = useIntersectionObserver(
  taggerRef,
  ([{isIntersecting}], observerEl) => {
    taggerIsVisible.value = isIntersecting
  })


function jumpUp() {
  console.log("🚀 | jumpUp | jumpUp", scrollerRef.value)

  if (!scrollerRef.value) return

  scrollerRef.value.scrollTo({top: 0, behavior: 'smooth'})
}

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