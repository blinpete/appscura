export const tags = [
  'zettelkasten', // evegreen note, digital garden, second brain

  'note-taking',

  'outliner', // bullet journal, bullet list
  'kanban',
  'todo',

  'free',
  'paid',

  'local',
  'server',

  'collab', // colaboration, for teams

  'markdown',
  'mindmap',
  'visual', // visual thinking


] as const

export type Tag = typeof tags[number]