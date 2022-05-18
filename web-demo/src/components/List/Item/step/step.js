import React, { Component } from 'react'
import './step.css'
import Step_step1 from './RoadmapStep/step_step1'
import Step_step2 from './RoadmapStep/step_step2'
import Step_step3 from './RoadmapStep/step_step3'
import Step_step4 from './RoadmapStep/step_step4'

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
              <Step_step1/>
              <Step_step2/>
              <Step_step3/>
              <Step_step4/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


