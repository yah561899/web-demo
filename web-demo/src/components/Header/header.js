import React, { Component } from 'react'
import Nav from './nav/nav'
import Headers from './header/header'
import Iso from './iso/iso'
import './header.css'
export default class Header extends Component {
  render() {
    return (
<<<<<<< HEAD
<div>
  <div className="container">
    {/* <!--nav--> */}
    <div className="row bg-light border py-2">
      <div className="col-lg-4">
        <ul className="nav">
          <li className="nav-item">
            {/* 帶擴充 */}
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
        {/* 帶擴充 */} 
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
                <i className="fa-solid fa-square-caret-down ps-2"></i>
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
    {/* <!--header--> */}
  <div className="container">
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
    {/* ISO */}
    <div className="row pt-5">
      <div className="col-lg-7">
          <h1 className="h11 text">ISO<small className="ps-2">SUSTAINABILITY</small></h1>
          <h2 className='h22 '>COMPLIANCE,REPORTING & CERTIIFICATION</h2>
          <h3 className='h33 '>SOLUTIONS FOR SMEs</h3>
          <div className="row mt-3">
              <div className="col-lg-7">
                  <p className='header-p pt-5'>Get tailor-made solutions to manage</p>
                  <p className='header-p pt-0'>tour carbon footprint impact to start</p>
                  <p className='header-p pt-0'>meering sustainability standards NOW!</p>
              </div>
              <div className="col-lg-3 pt-5">
                <button type="button" className="btn btn-light mb-3 btn1">
                  <i className="fa-solid fa-angles-right"></i>
                  LEARN MORE 
                </button>
                <br/>
                <button type="button" className="btn btn-light btn2">
                  <i className="fa-solid fa-angles-right"></i>
                  CONTACT US 
                </button>
              </div>
=======
      <div>
        <div className="container">
          <Nav />
          <div className="container">
            <Headers />
            <Iso />
>>>>>>> b0d833ea9c8e97835a55df4be70a11dd0c821eb5
          </div>
        </div>
      </div>
    )
  }
}
