

import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services' >
      <h5>what i offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>

        <article className='service'>
          
          <div className='service_head'>
            <h3>web development</h3>
          </div>

          <ul className='service_list'>
            <li className='service_list_li'>
              <BiCheck className='service_list_item' />
              <p>Develop and maintain various web applications.</p>
            </li>

            <li className='service_list_li'>
              <BiCheck className='service_list_item' />
              <p>Collaborate with cross-functional teams to ensure 
                seamless integration of web applications with existing systems and APIs.</p>
            </li>

            <li>
              <BiCheck className='service_list_item' />
              <p>Implement robust security measures to protect 
                sensitive user data and prevent unauthorized access to web applications.</p>
            </li>

            
          </ul>

        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>search engine optimization</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_item' />
              <p>Introduce website modernization efforts to create a better 
                overall user experience and incorporate SEO optimization, 
                increasing website visits from unique users</p>
            </li>

            
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>content creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_item' />
              <p><b>Copywriting:</b> Creating persuasive and compelling written content 
                for websites, blogs, marketing materials, social media, and advertisements.</p>
            </li>

            <li>
              <BiCheck className='service_list_item' />
              <p><b>Content Writing:</b> Generating informative and SEO-friendly articles, 
                blog posts, product descriptions, whitepapers, case studies, and e-books.</p>
            </li>

            <li>
              <BiCheck className='service_list_item' />
              <p><b>Graphic Design:</b> Designing visual content, including infographics, 
                logos, banners, social media graphics, and illustrations.</p>
            </li>

            <li>
              <BiCheck className='service_list_item' />
              <p><b>Social Media Content:</b> Crafting engaging content specifically 
                tailored for social media platforms.</p>
            </li>

            <li>
              <BiCheck className='service_list_item' />
              <p><b>Email Marketing Content:</b> Writing email campaigns and newsletters 
                to nurture leads and engage customers.</p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
