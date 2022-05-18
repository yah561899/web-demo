import React from 'react'
import archibus from './images/Archibus.png'
import system from './images/system.png'
import './Archibus.css'

const Archibus = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 Arch'>
          <p className='ps-5 p1'>Powered by our in-house</p>
          <p className='ps-5 p1'>State of the art </p>
          <p className="ps-5 p1">technoloies</p>
          <img src={archibus} className='img-fluid bus' />
        </div>
        <div className='col-lg-6 pt-5'>
          <img src={system} className='img-fluid com'/>
        </div>
      </div>
    </div>
  )
}

export default Archibus