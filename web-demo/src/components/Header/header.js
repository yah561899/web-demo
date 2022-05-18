import React, { Component } from 'react'
import Nav from './nav/nav'
import Headers from './header/header'
import Iso from './iso/iso'
import './header.css'
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Nav />
          <div className="container">
            <Headers />
            <Iso />
          </div>
        </div>
      </div>
    )
  }
}
