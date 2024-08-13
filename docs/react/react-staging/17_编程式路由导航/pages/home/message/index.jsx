import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Detail from './detail'

export default class Message extends Component {
  state = {
    list: [
      {
        id: '001',
        title: '001消息的标题'
      },
      {
        id: '002',
        title: '002消息的标题'
      },
      {
        id: '003',
        title: '003消息的标题'
      },
    ]
  }
  toLink = (item) => {
    this.props.history.push({
      pathname: '/home/message/detail',
      state: {id: item.id, title: item.title}
    })
  }
  render() {
    return (
      <div>
        <div>
          <ul>
            {
              this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <p onClick={ () => {this.toLink(item)} } style={{cursor: 'pointer'}}>{ item.title }</p>&nbsp;&nbsp;
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <Route path="/home/message/detail" component={Detail} />
        </div>
      </div>
    )
  }
}
