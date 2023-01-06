import type { LocationQuery } from 'vue-router'

export function queryToTags(q: LocationQuery) {
  let tags = q?.tags || []

  if (!Array.isArray(tags)) {
    tags = [tags]
  }

  return new Set(tags)
}