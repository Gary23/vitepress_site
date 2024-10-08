import React, { Component } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import MyNavLink from './components/MyNavLink'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                <MyNavLink className="list-group-item" to="/about">About</MyNavLink>
                <MyNavLink className="list-group-item" to="/home">Home</MyNavLink>
              </div>
            </div>
            <Switch>
              <Route 
                path="/about"
                component={About}
              />
              <Route 
                path="/about"
                component={Home}
              />
              <Route 
                path="/home"
                component={Home}
              />
            </Switch>
            {/* <Route 
              path="/about"
              component={About}
            />
            <Route 
              path="/about"
              component={Home}
            />
            <Route 
              path="/home"
              component={Home}
            /> */}
          </div>
        </BrowserRouter>
      </div>
    )
  }
}