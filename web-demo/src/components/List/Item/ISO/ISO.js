import React from 'react'
import './ISO.css'
import ISO_sentence from './cut/ISO_sentence'
import ISO_picture from './cut/ISO_picture'
import ISO_ISOcut from './cut/ISO_ISOcut'
// ISO
const ISO = () => {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-6'>
        <ISO_sentence/>
        <ISO_picture/>
        </div>
        <ISO_ISOcut/>
      </div>
    </div>
  )
} 

export default ISO