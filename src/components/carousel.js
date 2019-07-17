import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
    "mdbreact";
import accountImg from '../images/tax_background.jpg';
import accountImg2 from '../images/account_background.jpg';
import webDesignImg from '../images/website_background.jpg';
import webDesignImg2 from '../images/design_background.jpg';


const CarouselPage = () => {
    return (
        <MDBCarousel activeItem={1} length={4} className="z-depth-1 w-100">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <img className="d-block w-100" src={webDesignImg} alt="First slide" />
                        <MDBMask overlay="stylish-strong" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img className="d-block w-100" src={accountImg} alt="First slide" />
                        <MDBMask overlay="stylish-strong" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img className="d-block w-100" src={webDesignImg2} alt="Second slide" />
                        <MDBMask overlay="stylish-strong" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                    <MDBView>
                        <img className="d-block w-100" src={accountImg2} alt="Mattonit's item" />
                        <MDBMask overlay="stylish-strong" />
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default CarouselPage;
