import React from 'react'
import Archibus from './Item/Archibus'
import ISO from './Item/ISO'
import Step from './Item/step'

const List = () => {
  return (
    <div>
      <hr/>
      <Step/>
      <hr/>
      <ISO/>
      <hr/>
      <Archibus/>
      <hr/>
    </div>
  )
}

export default List