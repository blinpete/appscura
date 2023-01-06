import { Tag } from "./tags"

export type Item = {
  name: string
  logo: string
  summary: string
  website: string
  tags: Tag[]
}

export const items: Item[] = [
  {
    name: 'WorkFlowy',
    website: 'https://workflowy.com/list-maker/',
    logo: '',
    summary: 'infinite list maker',
    tags: ['outliner', 'server', 'free', 'paid'],
  },
  {
    name: 'Obsidian',
    website: 'https://obsidian.md/',
    logo: '',
    summary: 'Markdown editor with first-class support for Zettelkasten.',
    tags: ['zettelkasten', 'local', 'free', 'paid', 'markdown'],
  },
  {
    name: 'Logseq',
    website: '',
    logo: '',
    summary: 'Markdown editor with infinite nesting.',
    tags: ['zettelkasten', 'local', 'outliner', 'markdown', 'free'],
  },
  {
    name: 'Notion',
    website: '',
    logo: '',
    summary: 'Knowledge base with WYSIWYG editor.',
    tags: ['zettelkasten', 'server', 'free'],
  },
  {
    name: 'RemNote',
    website: '',
    logo: '',
    summary: 'RemNote focuses on repitition learning (flashcards) and infinite listing',
    tags: ['outliner', 'server'],

  }
]