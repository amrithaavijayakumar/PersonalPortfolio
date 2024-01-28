import React from 'react'
import './Skills.css'
function Skills() {
  return (
    <div id='skill'>
        <div className="container">
            <div className="row">
            <div className="col-12">
                <h3 className='text-light'  style={{textAlign:'center',textDecoration:'underline'}}>CAPABILITIES</h3>
                <br /><br />
            
        <p >HTML,CSS,BOOTSTRAP<i class="fa-brands fa-html5 fa-2xl mx-2" style={{color:" #74C0FC"}}></i>
        <i class="fa-brands fa-css3-alt fa-2xl" style={{color: "#63E6BE"}}></i>
        <i class="fa-brands fa-bootstrap fa-2xl mx-2" style={{color: "#B197FC"}}></i></p>
<div class="container">
  <div class="skills html">100%</div>
</div><br />

<p >JAVASCRIPT <i class="fa-brands fa-js fa-2xl" style={{color: '#FFD43B'}}></i> </p>
<div class="container">
  <div class="skills css">90%</div>
</div><br />

<p >REACT <i class="fa-brands fa-react fa-2xl" style={{color: "#74C0FC"}}></i></p>
<div class="container">
  <div class="skills js">90%</div>
</div><br />

<p >MongoDB <i class="fa-solid fa-database fa-2xl" style={{color: "#63E6BE"}}></i></p>
<div class="container">
  <div class="skills php">60%</div>
</div>
</div>
    </div>
    </div><br /><br /><br />
    </div>
  )
}

export default Skills