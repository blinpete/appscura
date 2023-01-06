<template>
<main>
    <section class="section-tags bg-light-900 px-10 py-20 min-h-1/2 flex flex-col gap-3 justify-center">
      <TagList class="flex justify-center">
        <Tag
          v-for="t in tagsArray"
          class="selected"
          @click="goMinusTag(t)"
          :close="true"
          >{{ t }}</Tag>
      </TagList>
      <TagList class="flex justify-center">
        <Tag v-if="!pending"
          v-for="(count, t) in tagCounts"
          @click="goPlusTag(t)"
          :counter="count"
        >{{ t }}</Tag>
      </TagList>
    </section>

    <section class="cards px-15 py-7 grid grid-cols-2 gap-3 relative" v-if="filtered">
      <div class="message rounded-2xl px-5 cursor-pointer bg-light-500 border-2 border-light-600 text-sm font-bold text-gray-600  absolute -top-3 right-1/2 transform translate-x-1/2">
        <span class="when-not-hovered" :class="{switchable: tagsArray.length}">
          <span v-if="pending">Searching apps...</span>
          <span v-else>{{ filtered.length }} apps</span>
        </span>
        
        <span class="when-hovered" :class="{switchable: tagsArray.length}" @click="goHome()">Clear filter</span>
      </div>

      <template v-if="filtered.length">
        <a
          class="card rounded-xl px-7 py-5 flex flex-col gap-2"
          :href="item.website"
          target="_blank"
          rel="noopener noreferrer"
          v-for="item in filtered"
        >
          <img
            :src="`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.website}&size=256`"
            alt="logo"
            width="40"
            height="40"
            class="rounded-lg"
          >

          <h1 class="font-bold">{{ item.name }}</h1>
          <p>{{ item.summary }}</p>
          <TagList class="pointer-events-none gap-y-1">
            <Tag v-for="t in item.tags" :key="t">#{{ t }}</Tag>
          </TagList>
        </a>
      </template>
      <div v-else>No items for query: {{ route.query.tags }}</div>
    </section>
</main>
</template>


<script lang="ts" setup>
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

<style scoped>
.message .when-hovered {
  display: none;
}
.message:hover .switchable.when-not-hovered {
  display: none;
}
.message:hover .switchable.when-hovered {
  display: inline;
}
</style>