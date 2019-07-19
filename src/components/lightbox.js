import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBView } from 'mdbreact'

const images = [
  'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(63).jpg',
  'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(66).jpg',
  'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(65).jpg',
  'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(67).jpg',
  'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(68).jpg',
  'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(64).jpg',
  'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(69).jpg',
  'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(59).jpg',
  'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(70).jpg',
]

const renderImages = () => {
  return images.map(imageSrc => {
    return (
      <MDBCol md="4">
        <MDBView hover zoom>
          <figure>
            <img src={imageSrc} alt="Gallery" className="img-fluid" />
          </figure>
        </MDBView>
      </MDBCol>
    )
  })
}

const LightBox = () => (
  <MDBContainer tag="section" className="text-center" background-color="stylish-color">
    <hr className="hr-grey my-4 w-75" />
    <h2 className="font-weight-bold my-5 text-center">产品展示</h2>
    <div className="mdb-lightbox">
      <MDBRow>{renderImages()}</MDBRow>
    </div>
  </MDBContainer>
)

export default LightBox
