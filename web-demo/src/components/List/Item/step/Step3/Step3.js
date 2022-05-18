import React, { Component } from 'react'
import Certified from '../img/certified.png'

export default class Step3 extends Component {
  render() {
    return (
        <div className="col-lg-3">
        <div className="card">
          <img src={Certified} className="card-img-top img" alt="..." />
          <div className="card-body">
          <h5 className='card-titleh5'>Step 3</h5>
            <h3 className='card-titleh3'>Validate</h3>
            <br />
            <p className='card-text'>Quickly calculae</p>
            <p className='card-text'>tour corporate</p>
            <p className='card-text'>emissions,easily</p>
            <p className='card-text'>upload or plug in</p>
            <p className='card-text'>data from all tour</p>
            <p className='card-text'>emmision sources</p>
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
