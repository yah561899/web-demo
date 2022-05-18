import React from 'react'
import DIF from './images/DIF-WM-LOGO.png'
// 上層
const Up = () => {
    return (
        <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "#213773" }}
        >
            {/* <!-- Left --> */}
            <div className="me-5">
                {/* 公司LOGO */}
                <img src={DIF} style={{ height: "100px" }} />
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            {/* icon */}
            <div>
                <a href="" className="text-white me-4">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-google"></i>
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            {/* <!-- Right --> */}
        </section>
    )
}

export default Up