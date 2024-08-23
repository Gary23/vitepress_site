import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAction, addAsyncAction, decreaseAction } from '../../redux/actions/count.js'

class CountUI extends Component {

  add = () => {
    const { value } = this.countSelect
    this.props.jia(value * 1)
  }
  decrease = () => {
    const { value } = this.countSelect
    this.props.jian(value * 1)
  }
  oddAdd = () => {
    const { value } = this.countSelect
    const { count } = this.props
    if (count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }
  asyncAdd = () => {
    const { value } = this.countSelect
    this.props.jiaAsync(value * 1)
  }
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h1>count组件</h1>
        <h3>Current Sum: { this.props.count }</h3>
        <select name="countSelect" ref={ c => this.countSelect = c }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={ this.add }> + </button>
        &nbsp;&nbsp;
        <button onClick={ this.decrease }> - </button>
        &nbsp;&nbsp;
        <button onClick={ this.oddAdd }> 和为奇数加 </button>
        &nbsp;&nbsp;
        <button onClick={ this.asyncAdd }> 异步加 </button>
      </div>
    )
  }
}

export default connect(
  state => ({ count: state.count }),
  {
    jia: addAction,
    jian: decreaseAction,
    jiaAsync: addAsyncAction,
  }
)(CountUI)