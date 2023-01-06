import { items } from '~/src/items'

export default defineEventHandler(event => {
  const query = getQuery(event) as { tags?: string | string[] }
  console.log("🚀 | query", query)

  const tags = Array.isArray(query.tags) ? query.tags : [query.tags]
  let filtered = items

  if (query.tags) {
    for (const t of tags) {
      filtered = filtered?.filter(item => item.tags.includes(t))
    }
  }

  // let tagCounts = new Map<string, number>()
  let tagCounts: Record<string, number> = {}

  filtered.forEach(item => {
    item.tags.forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1 })
  })

  for (const k of [...Object.keys(tagCounts)]) {
    if (tagCounts[k] === filtered.length) delete tagCounts[k]
  }

  // console.log("🚀 | filtered", filtered)
  // console.log("🚀 | tagCounts", tagCounts)

  return { filtered, tagCounts }
})