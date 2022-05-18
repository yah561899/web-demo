import React from 'react'
import chart from './images/chart-up.png'
import penguin from './images/penguin.png'

const Picture = () => {
    return (
        <div className="row">
            <div className="col-4 col align-self-end">
                <div className=''>
                    {/* penguin */}
                    <img src={penguin} style={{ height: "200px", marginBottom: "25px" }} />
                </div>
            </div>
            <div className="col-4 col align-self-end">
                {/* 條狀圖 */}
                <img src={chart} style={{ height: "350px" }} />
            </div>
        </div>
    )
}

export default Picture