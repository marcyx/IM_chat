import React, { Component } from 'react';
import './index.css';
import { Login } from './Login'
import './Login.css'
import {proxy} from './Proxy'
import {Main} from './Main'
import {MobilMain} from './MobilMain'

export default class App extends Component
{
  state = { showLogin: true };
  componentDidMount()
  {
    proxy.addEventListener( "login", () => this.setState( { showLogin: false } ) );
  }
  render()
  {
    return (
      <div className="app">
        { this.state.showLogin ? <Login /> : <MobilMain /> }
      </div>
    );
  }
}
