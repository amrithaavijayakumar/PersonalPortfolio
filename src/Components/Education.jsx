import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
function Education() {
  return (
    <div id='education'>
        <div className="container fluid">
        <div className="row">
        <h3 className='text-center text-light mt-4 ' style={{textDecoration:'underline'}}>ACADEMIC BACKGROUND</h3>
            <div className="col-4 mt-4">
            <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src="https://iprarthana.net/media/IMG-20220328-WA0018.jpg" fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>ACS EMHSS KALOOR</MDBCardTitle>
        <MDBCardText>
          SSLC <br />
          Class of 2015 <br />
          95%
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
            </div>
            <div className="col-4 mt-4">
            <MDBCard style={{height:'405px'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
        <MDBCardImage src="https://ihindustan.com/files/ihindustan-indias-local-shop-business-acs-english-medium-higher-secondary-school-16084622825fdf2fcab2efd.webp" style={{height:'350px'}} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>ACS EMHSS KALOOR</MDBCardTitle>
        <MDBCardText>
          PLUS TWO <br />
          Class of 2017 <br />
          80%
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
            </div>
            <div className="col-4 mt-4">
            <MDBCard style={{height:'405px'}} >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src="https://www.collegebatch.com/static/clg-gallery/amrita-school-of-arts-sciences-kochi-259858.jpg" style={{height:'350px'}} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>AMRITA VISHWA VIDYAPEETHAM</MDBCardTitle>
        <MDBCardText>
          INTEGRATED MCA <br />
          Class of 2017-2022<br />
          CGPA-7.35
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
            </div>
            
           
        <br /><br />
         <div className="col-4 mt-4">
            <MDBCard style={{height:'405px'}} >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src="https://th-i.thgim.com/public/incoming/dy0cuc/article65630464.ece/alternates/FREE_1200/WhatsApp%20Image%202022-07-08%20at%2010.25.22%20AM.jpeg" style={{height:'350px',width:'100%'}} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>LUMINAR TECHNOLAB</MDBCardTitle>
        <MDBCardText>
          MEA(R)N STACK INTERN <br />
          AUG 2023-PRESENT<br />
          
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
            </div>

            </div>
        </div><br /><br /><br /><br />


    </div>
  )
}

export default Education