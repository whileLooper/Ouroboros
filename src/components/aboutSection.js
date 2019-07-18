import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import webDevelopImg from '../images/undraw_web_developer.svg';
import taxImg from '../images/undraw_online_banking.svg';
import messageImg from '../images/undraw_manage_chats.svg';

const FeaturesPage = (props) => {
    return (
        <MDBContainer tag="section"  className="text-center">
            <h2 className="h1-responsive font-weight-bold my-5">
             服务内容
            </h2>
            <hr className="hr-grey my-4 w-75" />
            <p className="lead grey-text w-responsive mx-auto mb-5">
                <small>一家网站设计制作，会计税务一体化的工作室</small>
            </p>
            <MDBRow>
                <MDBCol className="mb-5" md="4">
                    <img src={webDevelopImg} className="img-fluid" alt="" />
                    <h5 className="font-weight-bold my-4">网站设计&开发</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        基于不同客户，设计开发高度契合的网站，一次设计开发，多平台支，同时完美呈现在电脑，笔记本，手机，平板
                    </p>
                </MDBCol>
                <MDBCol className="mb-5" md="4">
                    <img src={taxImg} className="img-fluid" alt="" />
                    <h5 className="font-weight-bold my-4">税务咨询</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        多年会计经验为您提供各州公司成立，税号申请，个人与公司记账，工资，报税等服务
                    </p>
                </MDBCol>
                <MDBCol className="mb-5" md="4">
                    <img src={messageImg} className="img-fluid" alt="" />
                    <h5 className="font-weight-bold my-4">微信客服支持</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Mild Souls Studio 通过官方微信公众号，给您提供实时在线客服，免费咨询，定时推送专业的商业知识与数据分析
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default FeaturesPage;
