import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <div id='contact'>
        <div className="container">
            <h3 className='text-center'>
            Don't hesitate to reach out if you have any questions or concerns. 
            </h3><br /><br />
    <h5 className='text-center'>
            You can contact me via email at amrithavijayakumar001@gmail.com. </h5>
            <center>
        <form action="" >
            <input style={{width:'50%'}}  type="text" placeholder='Name' className='form-control m-4 p-2' /> 
            <input style={{width:'50%'}}  type="text" placeholder='✉️Email' className='form-control m-4 p-2' />  
            <textarea style={{width:'50%'}} name="message" id=""  rows="10" placeholder='Comments'></textarea><br /><br />
            <MDBBtn className='mx-2' color='dark'>
       Submit
      </MDBBtn>

        </form>
        </center>
      <br />
        </div>
    </div>
  )
}

export default Contact