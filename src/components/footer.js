import React from 'react'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon,
} from 'mdbreact'
import smallLogo from '../images/small_logo.png'

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-0" color="black">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Made with{' '}
          <i class="text-danger far fa-heart animated heartBeat infinite" /> and
          crafted with &copy;
          <a href="https://mildsouls.com" alt="">
            <img
              style={{
                width: '45px',
                'padding-left': '5px',
                'padding-bottom': '2px',
              }}
              src={smallLogo}
              alt="Gallery"
              className="img-fluid"
            />
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
