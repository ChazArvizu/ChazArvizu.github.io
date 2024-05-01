import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  title: 'Chaz Arvizu - Portfolio',
  description: 'Portfolio showcasing Chaz Arvizu\'s work',

  bundler: viteBundler(),
  theme: defaultTheme({

    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Resume', link: '/resume.md' },
      {
        text: 'Projects',
        children: [
          '/projects/liftjourn.md',
          '/projects/gymrat.md',
        ],
      },
      
    ],
  }),

})
