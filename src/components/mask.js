import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact";
import qrcode from '../images/qrcode.jpg';
import logoImg from '../images/logo.png';

const Intro = ({ children }) => {
    return (
        <MDBContainer style={{marginTop: "25vh", marginBottom: "25vh"}}>
            <MDBRow >
                <MDBCol md="12" className="white-text text-center">
                    <img  src={logoImg} alt="Gallery" className="img-fluid" />
                    {/* <h2 className="h1-responsive font-weight-bold white-text mb-0 pt-md-5 pt-5">Mild Souls Studio</h2> */}
                    <hr className="hr-light my-4 w-75" />
                    <h3 className="subtext-header h3-responsive mt-3 mb-3">网站制作 | 税务咨询</h3>
                    <p className="text-small mt-5 mb-2">微信扫码关注公众号</p>
                    <p className="text-danger animated heartBeat infinite"><MDBIcon icon="heart" /></p>
                    <MDBBtn className="p-2 btn btn-lg btn-outline-grey">
                        <img className="d-block w-100" style={{animation: 'none'}} src={qrcode} alt="qrcode" />
                    </MDBBtn>
                    <p className="mt-4 mb-2"></p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Intro;
