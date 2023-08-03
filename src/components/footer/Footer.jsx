

import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>

      <div className='footer_nav'>
      <a href='#'>home</a>
      <a href='#about'>About me</a>
      <a href='#exprience'>Skills</a>
      <a href='#services'>Services</a>
      <a href='#contact'>Contact</a>
      </div>

      <div className='footer_socials'>
      <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com" target='_blank'><FaGithub/></a>
      </div>

      {/* <div className='footer_right'>
        @All rights reserved
      </div> */}
    </footer>
  )
}

export default Footer
