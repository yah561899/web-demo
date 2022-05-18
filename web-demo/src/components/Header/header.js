import React, { Component } from 'react'
import './header.css'
import img1 from './img/DIF-WM-LOGO.png'
import img2 from './img/goals.png'
import img3 from './img/ISO.png'
import img4 from './img/penguin.png'
export default class Header extends Component {
  render() {
    return (
      <div className="container">
    {/* <!--nav--> */}
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
    <div className="row  py-5 align-items-end">
      <div className="col-lg-4">
        <img src={img1} className="img-fluid "/>
      </div>
      <div className="col-lg-2 pe-5">
        <img src={img2} className=" img"/>
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

    <div className="row pt-5">
      <div className="col-lg-7">
          <p><h1 className="text">ISO<small className="ps-2">SUSTAINABILITY</small></h1></p>
          <p><h2>COMPLIANCE,REPORTING & CERTIIFICATION</h2></p>
          <p><h3>SOLUTIONS FOR SMEs</h3></p>
          <div className="row mt-3  align-items-end">
              <div className="col-lg-6">
                  <p>Get tailor-made solutions to manage</p>
                  <p>tour carbon footprint impact to start</p>
                  <p>meering sustainability standards NOW!</p>
              </div>
              <div className="col-lg-1">
                <div className="vr"></div>
              </div>
              <div className="col-lg-3">
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
          </div>
      </div>
      <div className="col-lg-1 align-self-end">
        <img src={img4} className="img-fluid img3"/>
      </div>
      <div className="col-lg-4 ">
          <img src={img3} className="img-fluid"/>
      </div>
    </div>
  </div>
    )
  }
}
