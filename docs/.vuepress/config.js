import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'
import { searchPlugin } from '@vuepress/plugin-search'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: 'Chaz Arvizu - Portfolio',
  description: 'Portfolio showcasing Chaz Arvizu\'s work',

  bundler: viteBundler(),

  theme: defaultTheme({
    logo: '/babyduck.svg',

    navbar: [
      { 
        text: 'Home', 
        link: '/' 
      },
      { text: 'Resume', 
        link: '/resume.md' 
      },
      {
        text: 'Projects',
        children: [
          '/projects/liftjourn.md',
          '/projects/gymrat.md',
        ],
      },
      {
        text: 'Live Browser Projects',
        children: [
          '/visuals/lorenz.md',
          '/visuals/solarsystem.md',
          '/visuals/strangerthingsintro.md',
        ],
      },
      {
        text: 'Hiking Gallery',
        link: '/hiking.md',
      },
    ],

    colorMode: 'dark',
    colorModeSwitch: false,
    sidebarDepth: 5,
  }),

  head: [
    ['link', { rel: 'icon', href: '/babyduck.svg' }],
  ],

  plugins: [
    registerComponentsPlugin({
      components: {
        LorenzAttractor: path.resolve(__dirname, './components/LorenzAttractor.vue'),
        SolarSystem: path.resolve(__dirname, './components/SolarSystem.vue'),
        StrangerThingsIntro: path.resolve(__dirname, './components/StrangerThingsIntro.vue'),
        Card: path.resolve(__dirname, './components/Card.vue'),
        Footer: path.resolve(__dirname, './components/Footer.vue'),
        TimeLine: path.resolve(__dirname, './components/TimeLine.vue'),
      },
    }),
    searchPlugin({

    }),
  ],
})
