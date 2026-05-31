import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/tapiz-docs/'

export default defineConfig({
  title: 'Tapiz Docs',
  description: 'Unified documentation portal for Tapiz API docs and user manual',
  cleanUrls: true,
  base,
  appearance: false,
  markdown: { html: true },
  lastUpdated: true,
  ignoreDeadLinks: false,
  themeConfig: {
    logo: `${base}logo.svg`,
    search: { provider: 'local' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API Docs', link: '/api/' },
      { text: 'User Manual', link: '/manual/' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'Operations', link: '/operations/' },
      { text: 'Reference', link: '/reference/glossary' }
    ],
    sidebar: {
      '/manual/': [
        { text: 'User Manual', items: [
          { text: 'Overview', link: '/manual/' },
          { text: 'Public Pages', link: '/manual/public' },
          { text: 'Account Access', link: '/manual/account-access' },
          { text: 'Student Manual', link: '/manual/student' },
          { text: 'Assistant Manual', link: '/manual/assistant' },
          { text: 'Faculty Manager Manual', link: '/manual/faculty-manager' },
          { text: 'Super Admin Manual', link: '/manual/super-admin' },
          { text: 'Settings', link: '/manual/settings' },
          { text: 'Feature Availability', link: '/manual/feature-gates' },
          { text: 'Troubleshooting', link: '/manual/troubleshooting' }
        ]}
      ],
      '/api/': [
        { text: 'API Docs', items: [
          { text: 'Overview', link: '/api/' },
          { text: 'Authentication', link: '/guide/authentication' },
          { text: 'Endpoint Inventory', link: '/api/routes' },
          { text: 'Admin', link: '/api/admin' },
          { text: 'Assistants', link: '/api/assistants' },
          { text: 'Attendance', link: '/api/attendance' },
          { text: 'Audit', link: '/api/audit' },
          { text: 'Auth', link: '/api/auth' },
          { text: 'Faculty Manager', link: '/api/faculty-manager' },
          { text: 'Forms', link: '/api/forms' },
          { text: 'Health', link: '/api/health' },
          { text: 'Institutions', link: '/api/institutions' },
          { text: 'Knowledge', link: '/api/knowledge' },
          { text: 'Maintenance', link: '/api/maintenance' },
          { text: 'Materials', link: '/api/materials' },
          { text: 'News', link: '/api/news' },
          { text: 'Notifications', link: '/api/notifications' },
          { text: 'Posts', link: '/api/posts' },
          { text: 'Public', link: '/api/public' },
          { text: 'Reports', link: '/api/reports' },
          { text: 'Score Sheets', link: '/api/score-sheets' },
          { text: 'Sessions', link: '/api/sessions' },
          { text: 'Status', link: '/api/status' },
          { text: 'Students', link: '/api/students' },
          { text: 'Subjects', link: '/api/subjects' },
          { text: 'Todos', link: '/api/todos' },
          { text: 'Versions', link: '/api/versions' }
        ]}
      ],
      '/architecture/': [
        { text: 'Architecture', items: [
          { text: 'Overview', link: '/architecture/' },
          { text: 'System Boundaries', link: '/architecture/clean-architecture' },
          { text: 'Data Model', link: '/architecture/data-model' },
          { text: 'Security Model', link: '/architecture/security' }
        ]}
      ],
      '/operations/': [
        { text: 'Operations', items: [
          { text: 'Overview', link: '/operations/' },
          { text: 'Deployment', link: '/operations/deployment' },
          { text: 'Scheduled Jobs', link: '/operations/scheduled-jobs' },
          { text: 'Incident Response', link: '/operations/runbooks/incident-response' },
          { text: 'Database Recovery', link: '/operations/runbooks/database-recovery' }
        ]}
      ],
      '/guide/': [
        { text: 'Guide', items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Authentication', link: '/guide/authentication' }
        ]}
      ],
      '/reference/': [
        { text: 'Reference', items: [
          { text: 'Configuration Policy', link: '/reference/configuration' },
          { text: 'Glossary', link: '/reference/glossary' },
          { text: 'ADR 0001', link: '/adr/0001-documentation-platform' }
        ]}
      ]
    },
    socialLinks: []
  }
})
