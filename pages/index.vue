<template>
<main>
    <section class="section-tags bg-light-900 px-40 py-20 min-h-1/2 flex flex-col gap-3 justify-center">
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

    <section class="cards px-20 py-20 grid grid-cols-2 gap-3 relative" v-if="filtered">
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
        <a
          class="card rounded-xl px-7 py-5 flex flex-col gap-2"
          :href="item.website"
          target="_blank"
          rel="noopener noreferrer"
          v-for="item in filtered"
        >
          <div class="flex flex-row items-center justify-start gap-4">
            <img
              :src="`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.website}&size=256`"
              alt="logo"
              width="40"
              height="40"
              class="rounded-lg"
            >
            
            <h1 class="font-bold text-xl">{{ item.name }}</h1>
          </div>
          <p class="mb-2">{{ item.summary }}</p>
          <h1 class="text-md italic text-center text-gray-500 mt-auto mb-2">"{{ item.motto }}"</h1>
          <TagList class="pointer-events-none gap-y-1 justify-end">
            <Tag class="bg-gray-100 opacity-70" v-for="t in item.tags" :key="t">#{{ t }}</Tag>
          </TagList>
        </a>
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
        <ButtonContribute class="mt-10"/>
      </div>
    </section>
</main>
</template>


<script lang="ts" setup>
import { tags } from '~~/src/tags';
import { queryToTags } from '~~/src/utils';

const route = useRoute()
const reactiveQuery = computed(() => route.query)
const tagsArray = computed(() => [...queryToTags(route.query)])

const { data, pending, error, refresh } = await useFetch('/api/count', {
  query: reactiveQuery,
})

const filtered = computed(() => data.value?.filtered)
const tagCounts = computed(() => data.value?.tagCounts)

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