import { defineConfig } from 'vitepress'

export default defineConfig({
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    languages: [
      {
        id: 'ts',
        scopeName: 'source.ts',
        grammar: require('shiki/languages/ts.tmLanguage.json'),
        aliases: ['typescript']
      }
    ]
  }
})