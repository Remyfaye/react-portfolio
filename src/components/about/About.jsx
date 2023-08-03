  

import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/me.jpg'



const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know Me</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>

          <div className='about_me-image'>
            <img alt='img' src={ME} className='about_img'/>
          </div>

          <div className='about_content'>

            <div className='about_cards'>

              <article className='about_card'>
                <FaAward className='about_icon'></FaAward>
                <h5>Experience</h5>
                <small>5 years </small>
              </article>

              <article className='about_card'>
                <FiUsers className='about_icon'></FiUsers>
                <h5>education</h5>
                <small>University of Nigeria, Nsukka</small>
              </article>

              <article className='about_card'>
                <VscFolderLibrary className='about_icon'></VscFolderLibrary>
                <h5>projects</h5>
                <small>40+ completed including this portfolio website</small>
              </article>
              
            </div>

            <p>
            Passionate and detail-oriented web developer
             with over 5 years of experience crafting high-quality, 
             user-centric web applications. Proficient in front-end and 
             back-end development, I possess a strong command of HTML, CSS, 
             and JavaScript, along with
             expertise in popular frameworks like React and Node.js.

            </p>

            <a href='#contact' className='btn btn-primary'>Let's talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
