import React from 'react'
import ig from '../assets/ig-logo.png'
import twitter from '../assets/twitter-logo.png'
import linkedin from '../assets/linkedin-logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.twitter.com/MuskanDawar2312" target="blank"><img src={twitter} className="footer-img"/></a>
      <a href="https://www.github.com/dawarmuskan4"><img src={ig} className="footer-img"/></a>
      <a href="https://www.linkedin.com/in/dawarmuskan4/"><img src={linkedin} className="footer-img"/></a>
    </div>
  )
}

export default Footer
