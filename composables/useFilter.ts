import { type UnwrapRef } from 'nuxt/dist/app/compat/capi'
import { type Item, items } from '~/src/items'
import { type Tag, tags } from '~~/src/tags'

type TagFromQuery = string | null

function isValidTag(tag: TagFromQuery): tag is Tag {
  return tags.includes(tag as Tag)
}

function validateTags(tags: Set<TagFromQuery> | readonly Tag[]): tags is Set<Tag> {
  for (const t of tags) {
    if (!isValidTag(t)) return false
  }

  return true
}

export default function (tagsFromQuery: ComputedRef<Set<TagFromQuery>>) {
  console.log("🚀 | tagsFromQuery", tagsFromQuery)

  let tagCounts = ref(new Map<Tag, number | null>(tags.map(t => [t, null])))

  const filtered = ref<Set<Item>>(new Set(items))

  function countTags() {
    tagCounts.value.clear()

    for (const item of filtered.value) {
      for (const tag of item.tags) {
        tagCounts.value.set(tag, (tagCounts.value.get(tag) || 0) + 1)
      }
    }

    for (const [t, count] of tagCounts.value) {
      if (count === filtered.value.size) tagCounts.value.set(t, null)
    }
  }

  watch(
    () => tagsFromQuery.value,
    () => {
      if (tagsFromQuery.value.size === 0) {

        filtered.value = new Set(items)

        countTags()
      }

      const tagsSet = tagsFromQuery.value

      // check tags
      if (!validateTags(tagsSet)) {
        filtered.value.clear()
        return
      }


      const buf = new Set<Item>()

      itemLoop: for (const item of items) {
        for (const t of tagsSet) {
          if (!item.tags.includes(t)) {
            continue itemLoop
          }
        }
        buf.add(item)
      }

      filtered.value = buf

      countTags()

      console.log("🚀 | filtered", filtered.value)
      console.log("🚀 | tagCounts", tagCounts)
    },
    { immediate: true }
  )


  return { filtered, tagCounts }
}