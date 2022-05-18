import React, { Component } from 'react'
import ISO from '../img/ISO.png'
import Penguin from '../img/penguin.png'
export default class iso extends Component {
  render() {
    return (
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
            </div>
        </div>
        <div className="col-lg-1  align-self-end">
          <img src={Penguin} className="img-fluid img3"/>
        </div>
        <div className="col-lg-4 ">
            <img src={ISO} className="img-fluid"/>
        </div>
      </div>
    )
  }
}
