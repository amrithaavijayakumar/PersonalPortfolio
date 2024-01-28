import React from 'react'
import './Work.css'
import vid from '../Assets/elon.png'
import vidd from '../Assets/zudio.png'
import viddd from '../Assets/luminar.png'
import calc from '../Assets/calc.png'
import bank from '../Assets/bank.png'
import api from '../Assets/api.png'
import emi from '../Assets/emi.png'
import dr from '../Assets/dr.png'
import rest from '../Assets/rest.png'
function Works() {
  return (
    <div id='work'>
        <div className="container fluid">
            <div className="row">
            <h3 className='text-light text-center' style={{textDecoration:'underline'}}>ENDEAVORS</h3>
            {/* html */}
            <h4 style={{textAlign:'center'}} className='mt-4'>HTML, CSS & BOOTSTRAP</h4><br />
                <div className="col-4 mt-4">
            <img src={vid} width={'100%'} height={'200px'}/>
            <a className='ms-4' style={{color:"GrayText"}} href="https://singular-piroshki-574fda.netlify.app/">Elon musk portfolio-know more<i class="ms-4 fa-solid fa-arrow-right fa-fade fa-xl" style={{color:" #ff0000"}}></i></a>
            </div>
            <div className="col-4 mt-4">
            <img src={vidd} width={'100%'} height={'200px'}/>
            <a className='ms-4' style={{color:"GrayText"}} href="https://willowy-llama-f8c0d8.netlify.app/">Zudio clone-know more<i class="ms-4 fa-solid fa-arrow-right fa-fade fa-xl" style={{color:" #ff0000"}}></i></a>
            </div>
            <div className="col-4 mt-4">
            <img src={viddd} width={'100%'} height={'200px'}/>
            <a className='ms-4' style={{color:"GrayText"}} href="https://spectacular-fox-3cba23.netlify.app/">Luminar website clone-know more<i class="ms-4 fa-solid fa-arrow-right fa-fade fa-xl" style={{color:" #ff0000"}}></i></a>
            </div>
            <br /><br /><br />

            {/* javascript */}
            <h4 style={{textAlign:'center'}} className='mt-4'>JAVASCRIPT</h4><br />
                <div className="col-4 mt-4">
            <img src={calc} width={'100%'} height={'200px'}/>
            <a className='ms-4' style={{color:"GrayText"}} href="https://legendary-sunflower-0ba62e.netlify.app/">Simple Calculator-know more<i class="ms-4 fa-solid fa-arrow-right fa-fade fa-xl" style={{color:" #ff0000"}}></i></a>
            </div>
            <div className="col-4 mt-4">
            <img src={bank} width={'100%'} height={'200px'}/>
            <a className='ms-4' style={{color:"GrayText"}} href="https://amritha-online-banking.netlify.app/">Online banking system-know more<i class="ms-4 fa-solid fa-arrow-right fa-fade fa-xl" style={{color:" #ff0000"}}></i></a>
            </div>
            <div className="col-4 mt-4">
            <img src={api} width={'100%'} height={'200px'}/>
            <a className='ms-4' style={{color:"GrayText"}} href="https://amrithavijayakumar-countryfetching.netlify.app/">API fetching-know more<i class="ms-4 fa-solid fa-arrow-right fa-fade fa-xl" style={{color:" #ff0000"}}></i></a>
            </div> <br /><br /><br />

            {/* react */}

            <h4 style={{textAlign:'center'}} className='mt-4'>REACT</h4><br />
                <div className="col-4 mt-4">
            <img src={emi} width={'100%'} height={'200px'}/>
            <a className='ms-4' style={{color:"GrayText"}} href="https://amritha-emi-calculator-exam.netlify.app/">EMI Calculator-know more<i class="ms-4 fa-solid fa-arrow-right fa-fade fa-xl" style={{color:" #ff0000"}}></i></a>
            </div>
            <div className="col-4 mt-4">
            <img src={dr} width={'100%'} height={'200px'}/>
            <a className='ms-4' style={{color:"GrayText"}} href="https://amritha-online-banking.netlify.app/">DR's appointment-know more<i class="ms-4 fa-solid fa-arrow-right fa-fade fa-xl" style={{color:" #ff0000"}}></i></a>
            </div>
            <div className="col-4 mt-4">
            <img src={rest} width={'100%'} height={'200px'}/>
            <a className='ms-4' style={{color:"GrayText"}} href="https://amrithavkumar-restaurantapp.netlify.app/">Resto Cafe-know more<i class="ms-4 fa-solid fa-arrow-right fa-fade fa-xl" style={{color:" #ff0000"}}></i></a>
            </div>
            </div>
            </div><br /><br /><br /><br />
    </div>
  )
}

export default Works