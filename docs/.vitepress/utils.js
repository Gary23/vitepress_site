export const getSiderBarList = (pathname) => {
  console.log('pathname-------------', pathname)
  if (pathname === '/react') {
    return [
      {
        text: 'react',
        items: [
          { text: 'react', link: '/react/index' },
          { text: 'react1', link: '/react/react1' },
          { text: 'react2', link: '/react/react2' }
        ]
      }
    ]
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