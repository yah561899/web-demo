import React from 'react'
import ISO14046 from './images/14046.png'
import ISO14064 from './images/14064.png'
import ISO14067 from './images/14067.png'

const ISOcut = () => {
    return (
        <div className='col-lg-6'>
            <div className='row'>
                <div className='col-lg-6'>
                    {/* ISO14064 */}
                    <img src={ISO14064} alt="" style={{ height: "200px" }} />
                </div>
                <div className='col-lg-6'>
                    <p><strong style={{ color: "#876854", fontSize: "40px" }}>ISO 14064</strong></p>
                    <hr style={{ border: "2px solid #876854" }} />
                    <p><strong style={{ color: "#876854" }}>GREENHOUSE GASES</strong></p>
                    <p><strong>EMMISIONS AND REMOVALS</strong></p>
                    <p><a className='iso-a' href="">Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='col-lg-6'>
                    {/* ISO14046 */}
                    <img src={ISO14046} alt="" style={{ height: "200px" }} />
                </div>
                <div className='col-lg-6'>
                    <p><strong style={{ color: "	#008080", fontSize: "40px" }}>ISO 14046</strong></p>
                    <hr style={{ border: "2px solid #008080" }} />
                    <p><strong style={{ color: "	#008080" }}>WATER FOOTPRINT</strong></p>
                    <p><strong>MANAGEMENT AND GUIDELINES</strong></p>
                    <p ><a className='iso-a' href="">Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='col-lg-6'>
                    {/* ISO14067 */}
                    <img src={ISO14067} alt="" style={{ height: "200px" }} />
                </div>
                <div className='col-lg-6'>
                    <p><strong style={{ color: "#435936", fontSize: "40px" }}>ISO 14067</strong></p>
                    <hr style={{ border: "2px solid #435936" }} />
                    <p><strong style={{ color: "#435936" }}>CARBON FOOTPRINT</strong></p>
                    <p><strong>OF PRODUCTS QUANTIFICATION</strong><br /></p>
                    <p ><a className='iso-a' href="">Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                </div>
            </div>
        </div>
    )
}

export default ISOcut