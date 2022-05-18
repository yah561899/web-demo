import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
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
    )
  }
}
