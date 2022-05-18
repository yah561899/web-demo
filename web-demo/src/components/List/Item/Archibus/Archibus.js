import React from 'react'
import archibus from './images/Archibus.png'
import system from './images/system.png'
import './Archibus.css'

const Archibus = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <p className='ps-5 p1'>Powered by our in-house</p>
          <p className='ps-5 p1'>State of the art technoloies</p>
          <img src={archibus} className='img-fluid' />
        </div>
        <div className='col-lg-6'>
          <img src={system} className='img-fluid'/>
        </div>
      </div>
    </div>
  )
}

export default Archibus