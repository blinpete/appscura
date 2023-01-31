import { type UnwrapRef } from 'nuxt/dist/app/compat/capi'
import { type Item, items } from '~/src/items'
import { type Tag, tags } from '~~/src/tags'

type TagFromQuery = string | null

function isValidTag(tag: TagFromQuery): tag is Tag {
  return tags.includes(tag as Tag)
}

export default function (tagsFromQuery: ComputedRef<Set<TagFromQuery>>) {
  console.log("🚀 | tagsFromQuery", tagsFromQuery)

  // const tagsFixed = computed(() => )


  let tagCounts = ref({} as Record<Tag, number | undefined>)
  // const tagCounts = new Map<Tag, number | null>()
  // let tagCounts = ref(new Map<Tag, number | null>(tags.map(t => [t, null])))

  const filtered = ref<Set<Item>>(new Set(items))

  watch(
    () => tagsFromQuery.value,
    () => {
      const tagsSet = tagsFromQuery.value.size ? tagsFromQuery.value : tags

      tagCounts.value = {} as UnwrapRef<typeof tagCounts>

      // const buf = []
      // items.forEach(item => {
      //   if (item.tags.some(t => tagsFromQuery.value.includes(t))) {
      //     buf.push(item)
      //     item.tags.forEach(t => {
      //       tagCounts.set(t, (tagCounts.get(t) || 0) + 1)
      //     })
      //   }
      // })

      const buf = new Set<Item>()

      for (const t of tagsSet) {
        if (!isValidTag(t)) continue

        for (const item of items) {
          if (item.tags.includes(t)) {
            buf.add(item)
          }
        }
      }

      filtered.value = buf

      for (const item of filtered.value) {
        for (const tag of item.tags) {
          tagCounts.value[tag] = (tagCounts.value[tag] || 0) + 1
        }
      }

      console.log("🚀 | filtered", filtered.value)
      console.log("🚀 | tagCounts", tagCounts)
    },
    { immediate: true }
  )




  return { filtered, tagCounts }
}