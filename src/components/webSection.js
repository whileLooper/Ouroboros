import React from 'react'
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact'
import mobileWebImg from '../images/mobile_web.jpg'
import ideaImg from '../images/undraw_forming_ideas.svg'
import loadingImg from '../images/undraw_fast_loading.svg'
import devicesImg from '../images/undraw_web_devices.svg'
import dataImg from '../images/undraw_all_the_data.svg'

const FeaturesPage = () => {
  return (
    <MDBContainer tag="section" className="my-5">
      <hr className="hr-grey my-4 w-75" />
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        我们的优势
      </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        优秀的网站开发团队，拥有多年大型企业开发经验。
      </p>
      <MDBRow className="mt-5">
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="4">
              <img src={ideaImg} alt="Gallery" className="img-fluid" />
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">创意设计</h5>
              <p className="grey-text">
                专业的网站设计水准，提供给您最现代化的设计理念，当下流行的网页设计风格，与您的企业完美融合。
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="4">
              <img src={devicesImg} alt="Gallery" className="img-fluid" />
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">响应式设计</h5>
              <p className="grey-text">
                遵循响应式设计开发理念，一次开发，多平台使用。无论电脑，平板还是手机都可完美呈现设计，节约企业成本。
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="text-name mt-5">
          <img className="img-fluid" src={mobileWebImg} alt="" />
        </MDBCol>
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="4">
              <img src={loadingImg} alt="Gallery" className="img-fluid" />
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">极速加载</h5>
              <p className="grey-text">
                轻量化，高速化的网页加载速度，让您的网站无论在何种设备上都及时呈现，极致的用户体验。
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="4">
              <img src={dataImg} alt="Gallery" className="img-fluid" />
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">数据追踪和分析</h5>
              <p className="grey-text">
                记录您的网站访客数据，对数据进行分析和总结，通过官方微信公众号定期为您推送定制化总结报告。
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default FeaturesPage
