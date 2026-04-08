import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chaz's Coding Portfolio",
  description: "Software Engineer",
  base: '/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resume', link: '/resume' },
      {
        text: 'Projects',
        items: [
          {
            text: 'Mobile App', items: [
              { text: 'LiftJourn', link: '/projects/liftjourn' },
            ]
          },
          {
            text: 'Experiments & Visuals', items: [
              { text: 'Lorenz Attractor', link: '/projects/school-project' },
              { text: 'Solar System Simulator', link: '/projects/old-app' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChazArvizu' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/chaz-arvizu-11816b2a2/' },
      { icon: 'credly', link: 'https://www.credly.com/users/chaz-arvizu/badges#credly' }
    ],

    search: {
      provider: 'local'
    }
  }
})
