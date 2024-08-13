import React, { Component } from 'react'
import { Redirect, BrowserRouter, Route } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'
import './App.css'

export default class App extends Component {

  updateState = (data) => {
    this.setState(data)
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                <MyNavLink className="list-group-item" to="/about">About</MyNavLink>
                <MyNavLink className="list-group-item" to="/home">Home</MyNavLink>
              </div>
            </div>
            <Route 
              path="/about"
              component={About}
            />
            <Route 
              path="/home"
              component={Home}
            />
            <Redirect to="/home/news" />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}