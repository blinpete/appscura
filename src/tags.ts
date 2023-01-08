export const tags = [
  // main features
  'note-taking',
  'zettelkasten', // evegreen note, digital garden, second brain
  'outliner', // bullet journal, bullet list
  'kanban',
  'todo',
  'whitedoard', // 'visual', // visual thinking
  'markdown',
  'mindmap',
  'graph-view',

  // platform --------
  // 'web',
  // 'ios',
  // 'android',
  // 'win',
  // 'mac',
  // 'linux',


  'collab', // colaboration, for teams
  // 'for-teams', // project management


  'data-local',
  'data-cloud', // cloud, where it stores your data

  'beta',
  'open-source',
  'free', // !== entirely free, mean that it has a free plan
] as const

export type Tag = typeof tags[number]