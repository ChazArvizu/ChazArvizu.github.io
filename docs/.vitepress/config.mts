import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chaz's Coding Portfolio",
  description: "Software Engineer",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resume', link: '/resume' },
      { text: 'Projects', link: '/projects' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChazArvizu' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/chaz-arvizu-11816b2a2/' }
    ]
  }
})
