import react from './router/react/index'
import browser from './router/browser/index'
import vue from './router/vue/index'

export const getSiderBarList = (pathname) => {
  if (pathname === '/react') {
    return [react]
  }
  else if (pathname === '/browser') {
    return [browser]
  }
  else if (pathname === '/vue') {
    return [vue]
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