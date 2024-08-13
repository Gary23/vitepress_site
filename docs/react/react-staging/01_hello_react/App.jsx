// 引入react
import React, { Component } from 'react'
import Hello from './components/hello'
import Wellcome from './components/wellcome'

// 创建并暴露App类组件，引入Hello组件、Wellcome组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Wellcome />
      </div>
    )
  }
}