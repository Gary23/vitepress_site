import react_basics from './react_basics'
import react_staging from './react_staging'

export default {
  text: 'react',
  items: [
    { 
      text: 'react基础',
      collapsed: true,
      items: react_basics,
    },
    { 
      text: 'react脚手架',
      collapsed: true,
      items: react_staging,
    },
  ],
}