import React from 'react';
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';
import piggyBankImg from "../images/money-saving-bank.jpg";
import votingIMg from "../images/undraw_voting.svg";
import invoicesImg from "../images/undraw_printing_invoices.svg";
import addContentImg from "../images/undraw_add_content.svg";
import todoImg from "../images/undraw_to_do_list.svg";

const FeaturesPage = () => {
  return (
    <MDBContainer tag="section" style={{'margin': '8rem auto'}}>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        多年会计经验为您提供全方位的会计服务，向客户承诺最优质及时的服务
      </p>
      <MDBRow className="mt-5">
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="4">
              <img src={votingIMg} alt="Gallery" className="img-fluid" />
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">公司注册</h5>
              <p className="grey-text">
                美国各州的公司成立，注册，登记
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="4">
              <img src={addContentImg} alt="Gallery" className="img-fluid" />
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">税号申请</h5>
              <p className="grey-text">
                联邦及各州税号申请，表格填写，材料递交
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
              <img src={invoicesImg} alt="Gallery" className="img-fluid" />
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">销售税,年终税</h5>
              <p className="grey-text">
                申报各种类型的个人年终税，各个州之间的商业税，收入税，销售税等等
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="4">
              <img src={todoImg} alt="Gallery" className="img-fluid" />
            </MDBCol>
            <MDBCol size="8">
              <h5 className="font-weight-bold mb-3">薪资核算</h5>
              <p className="grey-text">
                专业代算薪水，代理客户打印工资发票，节省您的费用。
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default FeaturesPage
