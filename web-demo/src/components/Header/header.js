import React, { Component } from 'react'
import Nav from './nav/nav'
import Title from './Title/Title'
import Iso from './iso/iso'
import './header.css'
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Nav/>
          <div className="container">
            <Title/>
            <Iso />
          </div>
        </div>
      </div>
    )
  }
}
