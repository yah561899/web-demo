import React from 'react'
import chart from './images/chart-up.png'
import penguin from './images/penguin.png'
import ISO14046 from './images/14046.png'
import ISO14064 from './images/14064.png'
import ISO14067 from './images/14067.png'

const ISO = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <p>ISO CERTIFICATION IS GOOD BUSINESS</p>
          <p>...</p>
          <div className="row">
            <div className="col-4 col align-self-end">
              <div className=''>
                <img src={penguin} style={{ height: "200px" }} />
              </div>
            </div>
            <div className="col-4 col align-self-end">
              <img src={chart} style={{ height: "350px" }} />
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='col'>
            <img src={ISO14064} alt="" style={{ height: "200px" }} />
            <p>ISO 14064</p>
            <hr />
          </div>
          <div className='col'>
            <img src={ISO14046} alt="" style={{ height: "200px" }} />
          </div>
          <div className='col'>
            <img src={ISO14067} alt="" style={{ height: "200px" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ISO