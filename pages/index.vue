<template>
<main>
    <section>
      <div class="tags bg-blue-300">
        <button
          v-for="t in tagsArray"
          @click="goMinusTag(t)"
        >{{ t }} (x)</button>
      </div>
      <div class="tags">
        <button
          v-for="(count, t) in tagCounts"
          @click="goPlusTag(t)"
        >{{ t }} ({{ count }})</button>
      </div>
    </section>

    <section class="cards px-7 flex flex-col gap-3" v-if="filtered">
      <template v-if="filtered.length">
        <div class="card bg-gray-200 rounded-lg border px-7 py-5" v-for="item in filtered">
          <h1 class="font-bold">{{ item.name }}</h1>
          <p>{{ item.summary }}</p>
          <div class="flex flex-row gap-2">
            <div class="bg-light-400 rounded-md px-2 text-cool-gray-700" v-for="t in item.tags" :key="t">#{{ t }}</div>
          </div>
        </div>
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
</script>

<style scoped>

.tags {
  padding: 1em;
  background-color: #adb;

  display: flex;
  gap: 0.2em;
}

.selected {
  background-color: bisque;
}
</style>