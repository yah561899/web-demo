import React, { Component } from 'react'
import Folder from '../img/folder.png'

export default class Step1 extends Component {
  render() {
    return (
        <div className="col-lg-3 ">
        <div className="card">
          <img src={Folder} className="img" alt="..." />
          <div className="card-body">
            <h5 className='card-titleh5'>Step 1</h5>
            <h3 className='card-titleh3'>Collect</h3>
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
