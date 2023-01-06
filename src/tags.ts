export const tags = [
  'markdown',
  'zettelkasten',
  'outliner',

  'free',
  'paid',

  'local',
  'server',
] as const

export type Tag = typeof tags[number]