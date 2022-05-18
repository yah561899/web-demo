import React from 'react'
import archibus from './images/Archibus.png'
import system from './images/system.png'
import './Archibus.css'

const Archibus = () => {
  return (
    <div className=''>
      <div className='row'>
        <div className='col-lg-6'>
          <p><strong className='ps-5' style={{fontSize:"40px",color:"#3E5589"}}>Powered by our in-house</strong></p>
          <p><strong className='ps-5' style={{fontSize:"40px",color:"#3E5589"}}>State of the art technoloies</strong></p>
          <img src={archibus} style={{height:"400px"}} className='' />
        </div>
        <div className='col-lg-6 col align-self-end'>
          <img src={system} style={{height:"500px"}} className=''/>
        </div>
      </div>
    </div>
  )
}

export default Archibus