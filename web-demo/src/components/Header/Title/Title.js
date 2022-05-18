import React, { Component } from 'react'
import DIF from '../img/DIF-WM-LOGO.png'
import Goals from '../img/goals.png'

export default class header extends Component {
  render() {
    return (
      <div className="row  py-5 align-items-end">
      <div className="col-lg-4">
        {/* 更換img名稱 */}
        <img src={DIF} className="img-fluid "/>
      </div>
      <div className="col-lg-2 align-self-start">
        <img src={Goals} className="img"/>
      </div>
      <div className="col-lg-5 offset-lg-1">
        <ul className="nav justify-content-between ">
          <li className="nav-item">
            <div className="dropdown">
              <button className="btn text" type="button" data-bs-toggle="dropdown">
                Solutions
                <i className="fa-solid fa-square-caret-down ps-2"></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item text" href="#">Chinese</a></li>
                <li><a className="dropdown-item text" href="#">Korean</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <button className="btn text" type="button" data-bs-toggle="dropdown">
                Resources
                <i className="fa-solid fa-square-caret-down ps-2"></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item text" href="#">Chinese</a></li>
                <li><a className="dropdown-item text" href="#">Korean</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <button className="btn text" type="button" data-bs-toggle="dropdown">
                Case Studies
                <i className="fa-solid fa-square-caret-down ps-2"></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item text" href="#">Chinese</a></li>
                <li><a className="dropdown-item text" href="#">Korean</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link text" href="#">About Us</a>
          </li>
        </ul>
      </div>
    </div>
    )
  }
}
