import { defineConfig } from 'vitepress'
import { getSiderBarList } from './utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress_demo/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'siteTitle',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' },
      { text: 'react', link: '/react/index' },
      { text: 'vue', items: [{text: 'vue1', link: '/vue/vue1'},{text: 'vue2', link: '/vue/vue2'}] },
    ],
    search: {
      provider: 'local'
    },
    sidebar: {
      '/react/': getSiderBarList('/react'),
      '/': getSiderBarList(''),
      '/vue/': getSiderBarList('/vue'),
    }
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'react',
    //     items: [
    //       { text: 'react', link: '/react/index' },
    //       { text: 'react1', link: '/react/react1' },
    //       { text: 'react2', link: '/react/react2' }
    //     ]
    //   },
    //   {
    //     text: 'vue',
    //     items: [
    //       { text: 'vue', link: '/vue/index' },
    //       { text: 'vue1', link: '/vue/vue1' },
    //       { text: 'vue2', link: '/vue/vue2' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
