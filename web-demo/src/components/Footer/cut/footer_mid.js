import React from 'react'
//中層
const Footer_mid = () => {
    return (
        <section className="">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        {/* Contact */}
                        <h6 className="text-uppercase fw-bold">Contact</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                        />
                        <p><i className="fas fa-home mr-3"></i> Rm. 3, 12F., No. 128, Sec. 2, Dunhua S. Rd., Da’an Dist., Taipei City 106712, Taiwan (R.O.C.)</p>
                        <p><i className="fas fa-envelope mr-3"></i> inq@dif.tw</p>
                        <p><i className="fas fa-phone mr-3"></i> + 886 2 2732-2233</p>
                        <p><i className="fa-solid fa-clock"></i> 9:00AM - 6:00PM</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        {/* Prouducts */}
                        <h6 className="text-uppercase fw-bold">Products</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                        />
                        {/* Products 待擴充連結 */}
                        <p>
                            <a href="#!" className="text-white"></a>
                        </p>
                        <p>
                            <a href="#!" className="text-white"></a>
                        </p>
                        <p>
                            <a href="#!" className="text-white"></a>
                        </p>
                        <p>
                            <a href="#!" className="text-white"></a>
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        {/* Innovation */}
                        <h6 className="text-uppercase fw-bold">Innovation</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                        />
                        {/* Innovation 待擴充連結 */}
                        <p>
                            <a href="#!" className="text-white"></a>
                        </p>
                        <p>
                            <a href="#!" className="text-white"></a>
                        </p>
                        <p>
                            <a href="#!" className="text-white"></a>
                        </p>
                        <p>
                            <a href="#!" className="text-white"></a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        {/* Resources */}
                        <h6 className="text-uppercase fw-bold">Resources</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer_mid