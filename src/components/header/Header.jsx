

import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h4>hello, i'm</h4>
        <h1>Fay</h1>
        <h5 className='text-light'>Fullstack developer</h5>
        <CTA/> 
        <Socials/>

        {/* <div className='img-wrapper'> */}
        <img alt='me' src={ME} className='me'/>
        
        {/* </div> */}

        <a href='#contact' className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header
