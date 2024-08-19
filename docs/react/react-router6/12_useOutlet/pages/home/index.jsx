import React from 'react'
import { Link, Outlet, useOutlet } from 'react-router-dom'

export default function Home() {
  console.log('useOutlet-------', useOutlet())
  return (
    <div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <h3>我是Home的内容</h3>
            <h4>Home嵌套组件useOutlet: {useOutlet()}</h4>
          </div>
          <div>
            <div>
              <Link to="news">news</Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="message">message</Link>
            </div>
          </div>
          <br />
          <Outlet />
        </div>
      </div>
    </div>
  )
}
