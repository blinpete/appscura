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
    summary: 'WorkFlowy is a single list that can contain infinite lists inside it. It’s a more powerful, easier way to organize all the information in your life.',
    tags: ['zettelkasten', 'outliner', 'kanban', 'data-cloud', 'free', 'collab',
      // 'web', 'win', 'linux', 'mac', 'android', 'ios'
    ],
  },
  {
    name: 'Obsidian',
    website: 'https://obsidian.md/',
    motto: 'A second brain, for you, forever.',
    summary: 'Obsidian is a powerful and extensible knowledge base that works on top of your local folder of plain text files.',
    tags: ['zettelkasten', 'data-local', 'free', 'markdown', 'kanban', 'graph-view', 'note-taking', 'todo'],
  },
  {
    name: 'Logseq',
    website: 'https://logseq.com/',
    motto: 'Connected thoughts to increase understanding.',
    summary: 'Logseq is a privacy-first, open-source knowledge base that works on top of local plain-text Markdown and Org-mode files.',
    tags: ['zettelkasten', 'data-local', 'outliner', 'markdown', 'free', 'open-source', 'beta', 'graph-view'],
  },
  {
    name: 'Notion',
    website: 'https://notion.so/product',
    motto: 'One workspace. Every team.',
    summary: 'We’re more than a doc. Or a table. Customize Notion to work the way you do.',
    tags: ['zettelkasten', 'data-cloud', 'free'],
  },
  {
    name: 'RemNote',
    website: 'https://www.remnote.com/',
    motto: 'The all-in-one tool for thinking and learning',
    summary: 'Sure, it’s a note-taking tool. But there’s also flashcards, PDFs, backlinks, and more - to help you study, stay organized, and think.',
    tags: ['outliner', 'data-cloud', 'zettelkasten'],
  },
  {
    name: 'Thinktool',
    website: 'https://thinktool.io/',
    motto: 'A tool for taking associative notes',
    summary: 'Thinktool\'s associative note-taking makes interconnected notes simple to explore. Freely connect related notes together with bidirectional links, or organize notes into loose outlines with multiple parents.',
    tags: ['outliner', 'data-cloud'],
  },
  // ---------------------------------------------------------------
  {
    name: 'Zettlr',
    website: 'https://www.zettlr.com/',
    motto: 'Goodbye Word Processing. Hello Future.',
    summary: 'Writing is an essential part of our everyday life. Why make it complicated? Zettlr redefines what writing means. It is slim, fast, and versatile. Focus on what matters to you. Publish, not perish.',
    tags: ['markdown', 'data-local'],
  },
  {
    name: 'Roam Research',
    website: 'https://roamresearch.com/',
    motto: 'A note-taking tool for networked thought.',
    summary: 'As easy to use as a document. As powerful as a graph database. Roam helps you organize your research for the long haul.',
    tags: ['outliner', 'data-cloud', 'zettelkasten'],
  },
  {
    name: 'Dynalist',
    website: 'https://dynalist.io/',
    motto: 'The best outlining app for your best work',
    summary: 'Where brilliant ideas are captured, fleshed out, and realized.',
    tags: ['outliner', 'data-cloud'],
  },
  {
    name: 'Checkvist',
    website: 'https://checkvist.com/',
    motto: 'Keyboard-driven list making',
    summary: 'Maximum efficiency and control over tasks, outlines, to-dos, writing, and planning',
    tags: ['outliner', 'data-cloud'],
  },
  {
    name: 'Athens Research',
    website: 'https://www.athensresearch.org/',
    motto: 'A collaborative knowledge graph for startup teams',
    summary: 'Athens helps startups and product teams connect notes, tasks, and insights in a single workspace.',
    tags: ['outliner', 'data-cloud'],
  },
  {
    name: 'Taskade',
    website: 'https://www.taskade.com/',
    motto: 'Build a Second Brain for Your Team.',
    summary: 'A magical list to break down complexities and map out your collective mind. Unlock your collaborative brain and connect tasks, notes, and teams, in one unified workspace.',
    tags: ['outliner', 'data-cloud', 'mindmap', 'collab', 'kanban', 'free'],
  },
  {
    name: 'Joplin',
    website: 'https://joplinapp.org/',
    motto: 'Free your notes',
    summary: 'Joplin is an open source note-taking app. Capture your thoughts and securely access them from any device.',
    tags: ['markdown', 'data-cloud'],
  },
  {
    name: 'Miro',
    website: 'https://miro.com/about/',
    motto: 'The leading visual collaboration platform',
    summary: 'Miro empowers remote, in-office, and hybrid teams to communicate and collaborate across formats, tools, channels, and timezones — without the constraints of physical location, meeting space, and whiteboards.',
    tags: ['whitedoard', 'data-cloud', 'collab'],
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
    tags: ['note-taking', 'zettelkasten', 'data-cloud', 'collab', 'graph-view'],
  },
  {
    name: 'Mem',
    website: 'https://get.mem.ai/',
    motto: 'The self-organizing workspace',
    summary: 'Mem is the world\'s first AI-powered workspace that\'s personalized to you. Amplify your creativity, automate the mundane, and stay organized automatically.',
    tags: ['note-taking', 'markdown', 'data-cloud', 'collab', 'free', 'beta'],
  },
  {
    name: 'Reflect',
    website: 'https://reflect.app/',
    motto: 'Think better with Reflect',
    summary: 'Mirror the way your mind works by associating notes through backlinks. Reflect builds you a second brain that you can reference anytime.',
    tags: ['zettelkasten', 'note-taking', 'outliner', 'data-cloud', 'graph-view'],
  },
  {
    name: 'Scrintal',
    website: 'https://www.scrintal.com/',
    motto: 'Make. Thinking & Writing. Visual.',
    summary: 'A web app that combines mind mapping with the power of networked note-taking. Organize & connect all your thoughts in one place.  As if Miro and Obsidian had a baby!',
    tags: ['whitedoard', 'note-taking', 'zettelkasten', 'data-cloud', 'mindmap', 'beta'],
  },
  {
    name: 'Trello',
    website: 'https://trello.com',
    motto: 'Trello brings all your tasks, teammates, and tools together',
    summary: 'Keep everything in the same place—even if your team isn’t.',
    tags: ['kanban', 'data-cloud', 'collab', 'free',],
  },
  {
    name: 'Walling',
    website: 'https://walling.app/',
    motto: 'Achieve more with your ideas',
    summary: 'Walling is the visual, fast tool to organize and share ideas.',
    tags: ['whitedoard', 'data-cloud', 'free',],
  },
  {
    name: 'Weeek',
    website: 'https://weeek.net/',
    motto: 'We help teams to be more effective',
    summary: 'A complete set of tools for your work: Kanban boards, weekly calendar, task management, flexible notifications, and more',
    tags: ['todo', 'collab', 'kanban', 'data-cloud'],
  },
  {
    name: 'Bear',
    website: 'https://bear.app/',
    motto: 'Markdown Notes for iPhone, iPad, and Mac',
    summary: 'Bear is a beautiful, flexible writing app for crafting notes and prose.',
    tags: ['markdown', 'zettelkasten', 'note-taking', 'data-cloud', 'data-local'],
  },
  {
    name: 'Ulysses',
    website: 'https://ulysses.app/',
    motto: 'The Ultimate Writing App for Mac, iPad and iPhone',
    summary: 'Powerful features and a pleasant, focused writing experience combined in one tool, made for people who love to write and write a lot — this is Ulysses.',
    tags: ['note-taking', 'data-cloud'],
  },
  {
    name: 'Inkdrop',
    website: 'https://www.inkdrop.app/',
    motto: 'Organizing your Markdown notes made simple.',
    summary: 'With 100+ plugins, cross-platform and encrypted data sync support',
    tags: ['markdown', 'note-taking', 'data-cloud',],
  },
  {
    name: 'Legend',
    website: 'https://legendapp.com/',
    motto: 'Do more deep work.',
    summary: 'Legend is designed for you - to work the way you do and to be the one place for all your productivity needs.',
    tags: ['outliner', 'kanban', 'zettelkasten', 'markdown', 'data-cloud'],
  },
  {
    name: 'Transno',
    website: 'https://transno.com/',
    motto: 'Minimalist Outline Notes',
    summary: 'One Tap To Mind Map',
    tags: ['outliner', 'mindmap', 'data-cloud'],
  },
  {
    name: 'Relanote',
    website: 'https://relanote.com/',
    motto: 'If so, Relanote may be the solution you\'re looking for.',
    summary: 'Are you searching for a Personal Knowledge Management system, a Zettelkasten app, a visual graph note-taking tool, a multi-device online notes app, or an app that allows you to connect all your notes using wiki-style bidirectional links and tags?',
    tags: ['outliner', 'zettelkasten', 'data-cloud'],
  },
  {
    name: 'Foam',
    website: 'https://foambubble.github.io/foam/',
    motto: '',
    summary: 'Foam is a personal knowledge management and sharing system inspired by Roam Research, built on Visual Studio Code and GitHub.',
    tags: ['markdown', 'data-local', 'free', 'zettelkasten', 'open-source'],
  },
  {
    name: 'Dendron',
    website: 'https://www.dendron.so/',
    motto: 'Knowledge Management. Redefined.',
    summary: 'Lightning fast. Open source. Built to scale.',
    tags: ['markdown', 'data-local', 'free', 'open-source'],
  },
  {
    name: 'Dona',
    website: 'https://dona.ai/',
    motto: 'A more humane to-do list',
    summary: 'Dona is a back to basic to-do list focused on fast and delightful user experience.',
    tags: ['todo', 'beta'],
  },
  {
    name: 'Kinopio',
    website: 'https://kinopio.club/',
    motto: 'Spatial Thinking for New Ideas and Hard Problems',
    summary: 'Get your thoughts out and visually connect them together. Kinopio works the way your mind works.',
    tags: ['whitedoard', 'data-cloud', 'markdown', 'mindmap'],
  },
  {
    name: 'Muse',
    website: 'https://museapp.com/',
    motto: 'Dive into big ideas',
    summary: 'Muse is your tool for deep work on iPad and Mac',
    tags: ['whitedoard', 'data-cloud'],
  },
  {
    name: 'Fermat',
    website: 'https://fermat.ws/',
    motto: 'Creativity augmented for brainstorming',
    summary: 'Unleash your creativity with AI on a collaborative canvas.',
    tags: ['whitedoard', 'collab', 'data-cloud'],
  },
  {
    name: 'WeekToDO',
    website: 'https://weektodo.me/',
    motto: 'The Minimalist Weekly Planner focused on Privacy',
    summary: 'WeekToDo is a Free and Open Source Weekly Planner. Stop prioritizing what’s on your schedule and start scheduling your priorities.',
    tags: ['todo', 'data-local'],
  },
  {
    name: 'Amplenote',
    website: 'https://www.amplenote.com/',
    motto: 'Write it down. Get it done.',
    summary: 'Take your best ideas from hunch to launch with Amplenote',
    tags: ['note-taking', 'todo', 'data-cloud', 'free', 'beta'],
  },
  {
    name: 'Amie',
    website: 'https://amie.so/',
    motto: 'The joyful productivity app.',
    summary: 'Schedule time for todos, events, and contacts.',
    tags: ['todo', 'collab', 'beta', 'data-cloud'],
  },
  {
    name: 'Superlist',
    website: 'https://www.superlist.com/',
    motto: 'Get things done with your team',
    summary: 'Like a to-do list but better',
    tags: ['todo', 'collab', 'data-cloud', 'beta', 'open-source'],
  },
  {
    name: 'ClickUp',
    website: 'https://clickup.com/',
    motto: 'One app to replace them all.',
    summary: 'All your work in one place: Tasks, Whiteboards, Dashboards, Chat, Goals, Docs',
    tags: ['todo', 'whitedoard', 'kanban', 'mindmap', 'collab', 'data-cloud', 'free',],
  },
  {
    name: 'TiddlyWiki',
    website: 'https://tiddlywiki.com/',
    motto: 'a non-linear personal web notebook',
    summary: 'Use it to keep your to-do list, to plan an essay or novel, or to organise your wedding. Record every thought that crosses your brain, or build a flexible and responsive website.',
    tags: ['zettelkasten', 'note-taking', 'todo', 'free'],
  },
  {
    name: 'Tana',
    website: 'https://tana.inc/',
    motto: 'The Everything OS. For you.',
    summary: 'Get ready to cancel half your software subscriptions. Tana\'s combination of simple concepts lets you build anything.',
    tags: ['outliner', 'data-cloud', 'todo', 'beta'],
  },
  {
    name: 'Fleeting Notes',
    website: 'https://www.fleetingnotes.app/',
    motto: 'Keep / Apple Notes with [[backlinks]]',
    summary: 'Take linked notes within your browser or on your phone, then sync the notes with Obsidian.',
    tags: ['markdown', 'data-local', 'data-cloud', 'free'],
  },
  {
    name: 'Thunk Notes',
    website: 'https://www.thunknotes.com/',
    motto: 'The Modern Daily Thinking Tool',
    summary: 'Think faster. Create more.',
    tags: ['data-cloud', 'graph-view', 'note-taking', 'zettelkasten'],
  },
  // {
  //   name: '',
  //   website: '',
  //   motto: '',
  //   summary: '',
  //   tags: ['outliner', 'data-cloud'],
  // },
  // {
  //   name: '',
  //   website: '',
  //   motto: '',
  //   summary: '',
  //   tags: ['outliner', 'data-cloud'],
  // },

  // {
  //   name: '',
  //   website: '',
  //   motto: '',
  //   summary: '',
  //   tags: ['outliner', 'data-cloud'],
  // },
]

/**
 * TODO:
 * - btn -> random app
 * - btn -> jump up
 * - 
 * 
*/
