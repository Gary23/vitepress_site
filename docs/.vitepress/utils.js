import react from './router/react/index'
import browser from './router/browser/index'

export const getSiderBarList = (pathname) => {
  if (pathname === '/react') {
    return [react]
  }
  else if (pathname === '/browser') {
    return [browser]
  }
  else if (pathname === '/vue') {
    return [
      {
        text: 'vue',
        collapsed: true,
        items: [
          { text: 'vue', link: '/vue/index' },
          { text: 'vue1', link: '/vue/vue1' },
          { text: 'vue2', link: '/vue/vue2' }
        ]
      }
    ]
  }
  else {
    return [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ]
  }
}