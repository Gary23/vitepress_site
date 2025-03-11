import react_basics from './react_basics'
import react_staging from './react_staging'
import react_router6 from './react_router6'
import redux from './redux'

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
    { 
      text: 'react-router6',
      collapsed: true,
      items: react_router6,
    },
    { 
      text: 'redux',
      collapsed: true,
      items: redux,
    },
  ],
}