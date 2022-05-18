import React from 'react'
import DIF from './images/DIF-WM-LOGO.png'
// footer
const Footer = () => {
  return (
    <div>
      <div className="">

        {/* <!-- Footer --> */}
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#192e66" }}>
          {/* 上層   */}
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
          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
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
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
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
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
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
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  {/* Resources */}
                  <h6 className="text-uppercase fw-bold">Resources</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                  />
                </div>
                {/* <!-- Grid column --> */}

              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}
          {/* 底層 */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "#213773" }}>
            © 2020 Digital Infrastructure Foundation Ltd. All Rights Reserved.
          </div>
        </footer>
        {/* <!-- Footer --> */}

      </div>
      {/* <!-- End of .container --> */}
    </div >
  )
}

export default Footer
