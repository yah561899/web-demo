import React, { Component } from 'react'
import './step.css'
import img1 from './img/ISO.png'
import img2 from './img/audit.png'
import img3 from './img/certified.png'
import img4 from './img/folder.png'
export default class Step extends Component {
  render() {
    return (
      <div className="container bg-light">
        <div className="row justify-content-center py-5">
          <div className="col-lg-11 ps-5">
            <p><h1 className='title-h1'><span className="title1">Roadmap your CSR to ISO </span><span className="title2">Sustainability </span><span className="title3">Cerification</span></h1></p>
          </div>
          <div className='row align-items-center'>
            <div className="col-lg-12">
              <h2 className='h2'>Simplified in 4 Easy Steps.</h2>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-3 ">
              <div className="card">
                <img src={img4} className="img" alt="..." />
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
                  <a href="#" className="btn  card-btn">
                  <i className="fa-solid fa-angles-right"></i>
                  LEARN MORE</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img src={img2} className="card-img-top img" alt="..." />
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
                  <a href="#" className="btn  card-btn">
                  <i className="fa-solid fa-angles-right"></i>
                  LEARN MORE</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img src={img3} className="card-img-top img" alt="..." />
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
                  <a href="#" className="btn  card-btn">
                  <i className="fa-solid fa-angles-right"></i>
                  LEARN MORE</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img src={img1} className="card-img-top img" alt="..." />
                <div className="card-body">
                <h5 className='card-titleh5'>Step 4</h5>
                  <h3 className='card-titleh3'>Collect</h3>
                  <br />
                  <p className='card-text'>Quickly calculae</p>
                  <p className='card-text'>tour corporate</p>
                  <p className='card-text'>emissions,easily</p>
                  <p className='card-text'>upload or plug in</p>
                  <p className='card-text'>data from all tour</p>
                  <p className='card-text'>emmision sources</p>
                  <br />
                  <a href="#" className="btn  card-btn">
                  <i className="fa-solid fa-angles-right"></i>
                  LEARN MORE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
