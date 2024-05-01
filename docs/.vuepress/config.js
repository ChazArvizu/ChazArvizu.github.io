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
          // { text: 'Projects Home', link: '/projects/' },
          { text: 'LiftJourn', link: '/projects/liftjourn.md' },
          { text: 'Gym Rat', link: '/projects/gymrat.md' },
        ],
      },
      // { text: 'Contact', link: '/contact/' },
    ],
  }),

})
