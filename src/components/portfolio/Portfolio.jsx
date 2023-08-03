

import React from 'react'
import './portfolio.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>here are some sample projects</h5>
      <h2>My Portfolio</h2>

      <div className='container portfolio_container'>

        <div className='portfolio_frontend'>
          

          <img alt='' 
          className='portfolio_img'
          src='https://static.vecteezy.com/system/resources/previews/011/844/757/original/back-to-school-background-with-doodle-light-bulb-and-rocket-pencil-launching-to-space-online-learning-and-web-page-template-digital-education-concept-free-vector.jpg'
          />
          <h3>School Website</h3>

          <div className='portfolio_content'>
      <a href='https://remyfaye.github.io/school-website' className='btn btn-primary'>live demo</a>

          </div>

        </div>

        <div className='portfolio_frontend'>
          

          <img alt='' 
          className='portfolio_img'
          src='https://enwpgo.files.wordpress.com/2021/06/b4276-924330_featured-image-for-wordpress-com_121820-1.png?w=1024'

          />
          <h3>social media homepage template</h3>

          <div className='portfolio_content'>
      <a href='https://remyfaye.github.io/Social-Media-Web-App' className='btn btn-primary'>live demo</a>

          </div>

        </div>

        <div className='portfolio_frontend'>
          

          <img alt='' 
          className='portfolio_img'
          src='https://assets.justinmind.com/wp-content/uploads/2021/11/web-design-portfolio-768x492.png'


          />
          <h3>my portfolio Website</h3>

          <div className='portfolio_content'>
      <a href='fay-sigma.vercel.app' className='btn btn-primary'>live demo</a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Portfolio
