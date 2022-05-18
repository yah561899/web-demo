import React, { Component } from 'react'
import Audit from '../img/audit.png'

export default class Step2 extends Component {
  render() {
    return (
        <div className="col-lg-3">
        <div className="card">
          <img src={Audit} className="card-img-top img" alt="..." />
          <div className="card-body">
            <h5 className='card-titleh5'>Step 2</h5>
            <h3 className='card-titleh3'>Analyze</h3>
            <br />
            <p className='card-text'>Easily compare</p>
            <p className='card-text'>your emissions,</p>
            <p className='card-text'>performance to</p>
            <p className='card-text'>understand the</p>
            <p className='card-text'>effect of your</p>
            <p className='card-text'>Sustainability...</p>
            <br />
            {/* 帶擴充 */}
            <a href="#" className="btn  card-btn">
            <i className="fa-solid fa-angles-right"></i>
            LEARN MORE</a>
          </div>
        </div>
      </div>
    )
  }
}
