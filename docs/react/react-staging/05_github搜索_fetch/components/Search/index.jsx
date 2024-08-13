import React, { Component } from 'react'
import SubPub from 'pubsub-js'

export default class Search extends Component {
  searchEvent = async () => {
    SubPub.publish('updateList', { errorState: false, users: [], firstFlag: false, loadingFlag: true })
    // 获取搜索内容
    const { value } = this.searchInput
    console.log(value)

    // promise链式调用
    // fetch(`http://localhost:3000/api/search/users?q=${value}`).then(res => {
    //   console.log('response', res)
    //   return res.json()
    // }, err => {
    //   console.log('error', err.message)
    //   SubPub.publish('updateList', { errorState: true, errorMessage: err.message, firstFlag: false, loadingFlag: false })
    //   return new Promise(() => {})
    // }).then(data => {
    //   console.log('data', data)
    //   SubPub.publish('updateList', { errorState: false, users: data.items, firstFlag: false, loadingFlag: false })
    // })

    // promise链式调用  catch兜底
    // fetch(`http://localhost:3000/api/search/users?q=${value}`).then(res => {
    //   console.log('response', res)
    //   return res.json()
    // }).then(data => {
    //   SubPub.publish('updateList', { errorState: false, users: data.items, firstFlag: false, loadingFlag: false })
    // }).catch(err => {
    //   console.log('error', err.message)
    //   SubPub.publish('updateList', { errorState: true, errorMessage: err.message, firstFlag: false, loadingFlag: false })
    // })

    // async await方式
    try {
      const response = await fetch(`http://localhost:3000/api/search/users?q=${value}`)
      const data = await response.json()
      SubPub.publish('updateList', { errorState: false, users: data.items, firstFlag: false, loadingFlag: false })
    } catch (err) {
      console.log('error', err.message)
      SubPub.publish('updateList', { errorState: true, errorMessage: err.message, firstFlag: false, loadingFlag: false })
    }
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <input ref={ c => this.searchInput = c } type="text" placeholder="输入关键词点击搜索"/>&nbsp;<button onClick={ this.searchEvent }>搜索</button>
      </section>
    )
  }
}