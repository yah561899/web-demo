import React from 'react'
import Footer_up from './cut/footer_up'
import Footer_mid from './cut/footer_mid'
import Footer_low from './cut/footer_low'

// footer
const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#192e66" }}>
      <Footer_up/>
      <Footer_mid/>
      <Footer_low/>
    </footer>
  )
}

export default Footer
