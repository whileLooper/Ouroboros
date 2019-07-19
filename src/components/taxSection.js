import React from 'react'
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact'
import piggyBankImg from "../images/money-saving-bank.jpg";

const FeaturesPage = () => {
  return (
    <MDBContainer tag="section" style={{'margin': '8rem auto'}}>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        资深会计为您提供各州不同类型的税务咨询与服务。
      </p>
      <MDBRow className="mt-5">
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="4">
              {/* <img src={ideaImg} alt="Gallery" className="img-fluid" /> */}
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">创意设计</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                hic.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="4">
              {/* <img src={devicesImg} alt="Gallery" className="img-fluid" /> */}
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">自适应网页设计</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                hic.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="text-name mt-5">
          <img className="img-fluid" src={piggyBankImg} alt="" />
        </MDBCol>
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="4">
              {/* <img src={loadingImg} alt="Gallery" className="img-fluid" /> */}
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">极速加载</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                hic.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="4">
              {/* <img src={dataImg} alt="Gallery" className="img-fluid" /> */}
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">数据追踪和分析</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                hic.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default FeaturesPage
