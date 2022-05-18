import React from 'react'
import './ISO.css'
import Sentence from './cut/sentence'
import Picture from './cut/picture'
import ISOcut from './cut/ISOcut'
// ISO
const ISO = () => {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-6'>
        <Sentence/>
        <Picture/>
        </div>
        <ISOcut/>
      </div>
    </div>
  )
}

export default ISO