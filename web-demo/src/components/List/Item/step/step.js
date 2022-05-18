import React, { Component } from 'react'
import './step.css'
import Step1 from './Step1/Step1'
import Step2 from './Step2/Step2'
import Step3 from './Step3/Step3'
import Step4 from './Step4/Step4'

export default class Step extends Component {
  render() {
    return (
      <div className='bg'>
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-lg-11 ps-5">
            <h1 className='title-h1'><span className="title1">Roadmap your CSR to ISO </span><span className="title2">Sustainability </span><span className="title3">Cerification</span></h1>
          </div>
          <div className='row align-items-center'>
            <div className="col-lg-12">
              <h2 className='h2'>Simplified in 4 Easy Steps.</h2>
            </div>
          </div>
          <div className="row py-5">
              <Step1/>
              <Step2/>
              <Step3/>
              <Step4/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
