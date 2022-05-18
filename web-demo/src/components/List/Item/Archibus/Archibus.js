import React from 'react'
import archibus from './images/Archibus.png'
import system from './images/system.png'
import './Archibus.css'

const Archibus = () => {
  return (
<<<<<<< HEAD
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <p className='ps-5 p1'>Powered by our in-house</p>
          <p className='ps-5 p1'>State of the art technoloies</p>
          <img src={archibus} className='img-fluid' />
        </div>
        <div className='col-lg-6'>
          <img src={system} className='img-fluid'/>
=======
    <div className=''>
      <div className='row'>
        <div className='col-lg-6'>
          <p><strong className='ps-5' style={{fontSize:"40px",color:"#3E5589"}}>Powered by our in-house</strong></p>
          <p><strong className='ps-5' style={{fontSize:"40px",color:"#3E5589"}}>State of the art technoloies</strong></p>
          <img src={archibus} style={{height:"400px"}} className='' />
        </div>
        <div className='col-lg-6 col align-self-end'>
          <img src={system} style={{height:"500px"}} className=''/>
>>>>>>> d6ecd9db094590cd41b523671b4f17f5c146fee5
        </div>
      </div>
    </div>
  )
}

export default Archibus