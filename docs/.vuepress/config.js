import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: 'Chaz Arvizu - Portfolio',
  description: 'Portfolio showcasing Chaz Arvizu\'s work',

  bundler: viteBundler(),
  theme: defaultTheme({

    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Resume', link: '/resume.md' },
      { text: 'Lorenz Attractor', link: '/lorenz.md' },
      { text: 'Solar System', link: '/solarsystem.md' },
      {
        text: 'Projects',
        children: [
          '/projects/liftjourn.md',
          '/projects/gymrat.md',
        ],
      },
      
    ],
  }),

  plugins: [
    registerComponentsPlugin({
      LorenzAttractor: path.resolve(__dirname, './components/LorenzAttractor.vue'),
      SolarSystem: path.resolve(__dirname, './components/SolarSystem.vue'),
    }),
  ],

})
