import React from 'react'
import archibus from './images/Archibus.png'
import system from './images/system.png'

const Archibus = () => {
  return (
    <div>
        <span>
            <p>Powered by our in-house</p>
            <p>State of the art technoloies</p>
            <img src={archibus} alt="" style={{height:"500px"}}/>
        </span>
        <span>
          <img src={system} alt="" style={{height:"500px"}} />
        </span>
    </div>
  )
}

export default Archibus