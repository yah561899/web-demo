import React from 'react'
import chart from './images/chart-up.png'
import penguin from './images/penguin.png'
import ISO14046 from './images/14046.png'
import ISO14064 from './images/14064.png'
import ISO14067 from './images/14067.png'
import './ISO.css'

const ISO = () => {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-6'>
          <p><strong style={{ fontSize: "40px", color: "#3E5589" }}>ISO CERTIFICATION IS GOOD BUSINESS</strong></p><br />
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Investment risks presented by climate change ar set to accelerate a significant reallocation of capital.</p>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Satisfy investor requirements of sustainability and lower carbon emissions.</p>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Provide reports for your stakenholders so they can understand your sustainability commitments and progress.</p>
          <div className="row">
            <div className="col-4 col align-self-end">
              <div className=''>
                <img src={penguin} style={{ height: "200px", marginBottom: "25px" }} />
              </div>
            </div>
            <div className="col-4 col align-self-end">
              <img src={chart} style={{ height: "350px" }} />
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='row'>
            <div className='col-lg-6'>
              <img src={ISO14064} alt="" style={{ height: "200px" }} />
            </div>
            <div className='col-lg-6'>
              <p><strong style={{ color: "#876854", fontSize: "40px" }}>ISO 14064</strong></p>
              <hr style={{ border: "2px solid #876854" }} />
              <p><strong style={{ color: "#876854" }}>GREENHOUSE GASES</strong></p>
              <p><strong>EMMISIONS AND REMOVALS</strong></p>
              <p><a className='iso-a' href="">Learn More <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-lg-6'>
              <img src={ISO14046} alt="" style={{ height: "200px" }} />
            </div>
            <div className='col-lg-6'>
              <p><strong style={{ color: "	#008080", fontSize: "40px" }}>ISO 14046</strong></p>
              <hr style={{ border: "2px solid #008080" }} />
              <p><strong style={{ color: "	#008080" }}>WATER FOOTPRINT</strong></p>
              <p><strong>MANAGEMENT AND GUIDELINES</strong></p>
              <p ><a className='iso-a' href="">Learn More <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-lg-6'>
              <img src={ISO14067} alt="" style={{ height: "200px" }} />
            </div>
            <div className='col-lg-6'>
              <p><strong style={{ color: "#435936", fontSize: "40px" }}>ISO 14067</strong></p>
              <hr style={{ border: "2px solid #435936" }} />
              <p><strong style={{ color: "#435936" }}>CARBON FOOTPRINT</strong></p>
              <p><strong>OF PRODUCTS QUANTIFICATION</strong><br /></p>
              <p ><a className='iso-a' href="">Learn More <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ISO