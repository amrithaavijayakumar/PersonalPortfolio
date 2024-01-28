import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  
} from 'mdb-react-ui-kit';
import me from '../Assets/a.png'

function Header() {
    const [openNavRight, setOpenNavRight] = useState(false);

  return (
    <div   >

<MDBNavbar  expand='lg' >
      <MDBContainer fluid>
    <a href="/">  <img  src={me} width={'70px'} height={'50px'} alt="" /></a>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavRight(!openNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink style={{color:'white'}} href='#home'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink style={{color:'white'}} href='#about'>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarLink style={{color:'white'}} href='#education'>Education</MDBNavbarLink>
            <MDBNavbarItem>
            <MDBNavbarLink style={{color:'white'}} href='#skill'>Skills</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink style={{color:'white'}} href='#work'>Endeavors</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink style={{color:'white'}} href='#contact'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header