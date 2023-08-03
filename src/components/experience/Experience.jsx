

import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='exprience'>
      <h5>what skills do i have?</h5>
      <h2>My stack</h2>

      <div className='container experience_container'>

        <div className='experience_frontend'>

          <h3>frontend development</h3>

          <div className='experience_content'>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_icons'/>
              <div>
              <h4>html</h4>
              <small className='text-light'>Experienced</small>

              </div>
              
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_icons'/>
              <div>
              <h4>wordpress</h4>
              <small className='text-light'>Experienced</small>

              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_icons'/>
              <div>
              <h4>css</h4>
              <small className='text-light'>Experienced</small>

              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_icons'/>
              <div>
              <h4>javaScript</h4>
              <small className='text-light'>intermediate</small>

              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_icons'/>
              <div>
              <h4>ReactJs</h4>
              <small className='text-light'>Experienced</small>

              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_icons'/>
              <div>
              <h4>NextJs</h4>
              <small className='text-light'>intermidiate</small>

              </div>
            </article>

          </div>

        </div>

        <div className='experience_backend'>
        <h3>backend development</h3>

        <div className='experience_content'>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>
            <h4>NodeJs</h4>
            <small className='text-light'>Experienced</small>

            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>
            <h4>python</h4>
            <small className='text-light'>intermidiate</small>

            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>
            <h4>MongiDb</h4>
            <small className='text-light'>Database</small>

            </div>
          </article>

         

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>
            <h4>NextJs</h4>
            <small className='text-light'>intermidiate</small>

            </div>
          </article>

        </div>

        </div>

      </div>
    </section>
  )
}

export default Experience
