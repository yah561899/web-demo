import React, { Component } from 'react'
import './header.css'
import img1 from './img/DIF-WM-LOGO.png'
import img2 from './img/goals.png'
export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row bg-light border py-2">
          <div className="col-lg-4">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="icon">
                    <i className="fa-brands fa-facebook-square"></i>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="icon">
                    <i className="fa-brands fa-twitter-square"></i>
                  </span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="icon">
                    <i className="fa-brands fa-instagram"></i>
                  </span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="icon">
                    <i className="fa-brands fa-youtube"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="#"><span className="text">News & Events.</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span className="text">Contact</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span className="text">FAQs.</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="icon">
                    <i className="fa fa-solid fa-globe"></i>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="btn btn-light text" type="button" data-bs-toggle="dropdown">
                    English
                    <i className="fa-solid fa-square-caret-down"></i>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item text" href="#">Chinese</a></li>
                    <li><a className="dropdown-item text" href="#">Korean</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row al pt-5 align-items-end">
          <div className="col-lg-3">
            <img src={img1} className="img-fluid" />
          </div>
          <div className="col-lg-1">
            <div className="vr"></div>
          </div>
          <div className="col-lg-1 align-self-start">
            <img src={img2} className=" img-fluid" />
          </div>
          <div className="col-lg-5 offset-lg-2">
            <ul className="nav justify-content-between ">
              <li className="nav-item">
                <div className="dropdown">
                  <button className="btn text" type="button" data-bs-toggle="dropdown">
                    Solutions
                    <i className="fa-solid fa-square-caret-down"></i>
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
                    <i className="fa-solid fa-square-caret-down"></i>
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
                    <i className="fa-solid fa-square-caret-down"></i>
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
      </div>
    )
  }
}
