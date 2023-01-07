import { Tag } from "./tags"

export type Item = {
  name: string
  motto: string
  summary: string
  website: string
  tags: Tag[]
}

export const items: Item[] = [
  {
    name: 'WorkFlowy',
    website: 'https://workflowy.com/list-maker/',
    motto: 'The Infinite List Maker.',
    summary: 'It supports backlinks, tags, tasks, kanban boards, sharing via link. Runs in the browser, desktop and phone.',
    tags: ['zettelkasten', 'outliner', 'server', 'free', 'paid'],
  },
  {
    name: 'Obsidian',
    website: 'https://obsidian.md/',
    motto: 'A second brain, for you, forever.',
    summary: 'Obsidian is a powerful and extensible knowledge base that works on top of your local folder of plain text files.',
    tags: ['zettelkasten', 'local', 'free', 'paid', 'markdown'],
  },
  {
    name: 'Logseq',
    website: 'https://logseq.com/',
    motto: 'Connected thoughts to increase understanding.',
    summary: 'Logseq is a privacy-first, open-source knowledge base that works on top of local plain-text Markdown and Org-mode files.',
    tags: ['zettelkasten', 'local', 'outliner', 'markdown', 'free'],
  },
  {
    name: 'Notion',
    website: 'https://notion.so/',
    motto: 'One workspace. Every team.',
    summary: 'We’re more than a doc. Or a table. Customize Notion to work the way you do.',
    tags: ['zettelkasten', 'server', 'free'],
  },
  {
    name: 'RemNote',
    website: 'https://www.remnote.com/',
    motto: 'The all-in-one tool for thinking and learning',
    summary: 'Sure, it’s a note-taking tool. But there’s also flashcards, PDFs, backlinks, and more - to help you study, stay organized, and think.',
    tags: ['outliner', 'server'],
  },
  {
    name: 'Thinktool',
    website: 'https://thinktool.io/',
    motto: 'A tool for taking associative notes',
    summary: 'Thinktool\'s associative note-taking makes interconnected notes simple to explore. Freely connect related notes together with bidirectional links, or organize notes into loose outlines with multiple parents.',
    tags: ['outliner', 'server'],
  },
  // ---------------------------------------------------------------
  {
    name: 'Zettlr',
    website: 'https://www.zettlr.com/',
    motto: 'Goodbye Word Processing. Hello Future.',
    summary: 'Writing is an essential part of our everyday life. Why make it complicated? Zettlr redefines what writing means. It is slim, fast, and versatile. Focus on what matters to you. Publish, not perish.',
    tags: ['markdown', 'local'],
  },
  {
    name: 'Roam Research',
    website: 'https://roamresearch.com/',
    motto: 'A note-taking tool for networked thought.',
    summary: 'As easy to use as a document. As powerful as a graph database. Roam helps you organize your research for the long haul.',
    tags: ['outliner', 'server', 'paid'],
  },
  {
    name: 'Dynalist',
    website: 'https://dynalist.io/',
    motto: 'The best outlining app for your best work',
    summary: 'Where brilliant ideas are captured, fleshed out, and realized.',
    tags: ['outliner', 'server'],
  },
  {
    name: 'Checkvist',
    website: 'https://checkvist.com/',
    motto: 'Keyboard-driven list making',
    summary: 'Maximum efficiency and control over tasks, outlines, to-dos, writing, and planning',
    tags: ['outliner', 'server'],
  },
  {
    name: 'Athens Research',
    website: 'https://www.athensresearch.org/',
    motto: 'A collaborative knowledge graph for startup teams',
    summary: 'Athens helps startups and product teams connect notes, tasks, and insights in a single workspace.',
    tags: ['outliner', 'server'],
  },
  {
    name: 'Taskade',
    website: 'https://www.taskade.com/',
    motto: 'Build a Second Brain for Your Team.',
    summary: 'A magical list to break down complexities and map out your collective mind. Unlock your collaborative brain and connect tasks, notes, and teams, in one unified workspace.',
    tags: ['outliner', 'server', 'mindmap', 'collab'],
  },
  {
    name: 'Joplin',
    website: 'https://joplinapp.org/',
    motto: 'Free your notes',
    summary: 'Joplin is an open source note-taking app. Capture your thoughts and securely access them from any device.',
    tags: ['markdown', 'server'],
  },
  {
    name: 'Miro',
    website: 'https://miro.com/about/',
    motto: 'The leading visual collaboration platform',
    summary: 'Miro empowers remote, in-office, and hybrid teams to communicate and collaborate across formats, tools, channels, and timezones — without the constraints of physical location, meeting space, and whiteboards.',
    tags: ['visual', 'server', 'collab'],
  },
  {
    name: 'Owlscroll',
    website: 'https://owlscroll.io/',
    motto: 'A place for your thoughts.',
    summary: 'Owlscroll combines the immersiveness of paper and the power of computers, to produce an extraordinary writing experience.',
    tags: ['note-taking', 'markdown'],
  },
  {
    name: 'Supernotes',
    website: 'https://supernotes.app/',
    motto: 'Free Your Thoughts',
    summary: 'Supernotes is your new home for ideas, records, tasks, and lists. Enjoy efficient note-taking without the hassle.',
    tags: ['note-taking', 'zettelkasten', 'server', 'collab'],
  },
  {
    name: 'Mem',
    website: 'https://get.mem.ai/',
    motto: 'The self-organizing workspace',
    summary: 'Mem is the world\'s first AI-powered workspace that\'s personalized to you. Amplify your creativity, automate the mundane, and stay organized automatically.',
    tags: ['note-taking', 'server', 'collab', 'free', 'paid'],
  },
  {
    name: 'Reflect',
    website: 'https://reflect.app/',
    motto: 'Think better with Reflect',
    summary: 'Mirror the way your mind works by associating notes through backlinks. Reflect builds you a second brain that you can reference anytime.',
    tags: ['zettelkasten', 'note-taking', 'server'],
  },
  {
    name: 'Scrintal',
    website: 'https://www.scrintal.com/',
    motto: 'Make. Thinking & Writing. Visual.',
    summary: 'A web app that combines mind mapping with the power of networked note-taking. Organize & connect all your thoughts in one place.  As if Miro and Obsidian had a baby!',
    tags: ['visual', 'zettelkasten', 'server'],
  },
  {
    name: 'Trello',
    website: 'https://trello.com',
    motto: 'Trello brings all your tasks, teammates, and tools together',
    summary: 'Keep everything in the same place—even if your team isn’t.',
    tags: ['kanban', 'server', 'collab', 'free', 'paid'],
  },
  {
    name: 'Walling',
    website: 'https://walling.app/',
    motto: 'Achieve more with your ideas',
    summary: 'Walling is the visual, fast tool to organize and share ideas.',
    tags: ['visual', 'server', 'free', 'paid'],
  },

  // {
  //   name: '',
  //   website: '',
  //   motto: '',
  //   summary: '',
  //   tags: ['outliner', 'server'],
  // },
]

/**
 * TODO:
 * - btn -> random app
 * - btn -> jump up
 * - 
 * 
*/
