import React from 'react'
import Low from './cut/low'
import Mid from './cut/mid'
import Up from './cut/up'
// footer
const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#192e66" }}>
      <Up />
      <Mid />
      <Low />
    </footer>
  )
}

export default Footer
