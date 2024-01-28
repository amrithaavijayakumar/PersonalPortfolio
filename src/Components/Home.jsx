import React from 'react'

function Home() {
  return (
    <div id='home'>
       <div className="container">
        <div className="row">
            <div className="col-12 " style={{marginTop:'80px',textAlign:'center'}}>
                <h3 style={{textAlign:'center',color:'GrayText'}}>I'am</h3>
            <h1>AMRITHA <span style={{color:'orange'}}>VIJAYAKUMAR</span></h1><br />
                    <h3 style={{color:'GrayText',textAlign:'center'}}>MEA(R)N STACK DEVELOPER</h3><br />

                    <h5>FOLLOW ME ON: <br />
                    <div className='mt-2'>
                 <a href="https://www.linkedin.com/in/amritha-vijayakumar-b03777292/"><i class="fa-brands fa-linkedin fa-beat fa-xs" style={{color: '#74C0FC'}}></i></a>
                 <a className='ms-2' href="https://github.com/amrithaavijayakumar"><i class="fa-brands fa-github fa-beat fa-xs"></i></a>
                 <a className='ms-2' href="https://www.instagram.com/amritha_v_panicker?igsh=dWU1M3c1djIydXBq"><i class="fa-brands fa-instagram fa-beat fa-xs" style={{color: "#ff0000"}}></i></a>
                 <a className='ms-2' href="https://www.youtube.com/channel/UCaas_Vk3LEoecUUxhCFvAXQ"><i class="fa-brands fa-youtube fa-beat fa-xs" style={{color:" #ff0000"}}></i></a>
      </div>
                    </h5>
            </div>
        </div>
       </div><br /><br /><br />

    </div>
  )
}

export default Home