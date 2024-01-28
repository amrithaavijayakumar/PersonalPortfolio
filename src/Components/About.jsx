import React from 'react'
import './About.css'
import mee from '../Assets/me2.jpg'

function About() {
  return (
    <div id='about'>
        <div className="container">
            <div className="row">
            <h3 className='mt-4 text-center text-light' style={{textDecoration:'underline'}}>Personal Bio</h3>
                <div className="col-5 ">
                    <div className='container fluid mt-4'>
                    <img src={mee} style={{width:'90%', height:'90%', borderRadius:'20px'}} alt="" />
                    </div>
                </div>
                <div className="col-7 mt-4">
                    <div className="typewriter">
                    
                        <h3 className="m-4" style={{color:'GrayText'}}>MEA(R)N STACK DEVELOPER</h3>
                    </div>
                    <div className="container">
                    <p style={{textAlign:'justify'}}>
                    As a seasoned MEAN stack developer, I bring a wealth of expertise in crafting dynamic and efficient web applications.
                     Proficient in MongoDB, Express.js, Javascript, HTML, CSS, Bootstrap and React, I leverage these technologies to create seamless and responsive solutions. 
                     My in-depth understanding of database management, server-side scripting, and front-end development allows me to architect robust 
                     applications that meet both functional and aesthetic requirements. With a keen eye for detail and a passion for staying abreast of the 
                     latest industry trends, I am dedicated to delivering high-quality, scalable, and user-friendly software. Collaborative by nature, I thrive 
                     in dynamic environments, working seamlessly with cross-functional teams to transform innovative ideas into reality. With a commitment to 
                     continuous learning and
                     a problem-solving mindset, I am well-equipped to tackle the challenges of modern web development.
            </p>
                    </div>
                </div>
            </div>
        </div><br /><br /><br /><br />
        
        </div>
  )
}

export default About