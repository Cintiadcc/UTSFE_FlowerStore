import React from "react";
import styled from "styled-components";

const Footer = () => {
    return(
        <FooterContainer className="main-footer">
        <div className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>FIELD DAYS FLOWERS</h4>
                            <li>BY : Cintia</li>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Location</h4>
                                <ul className="list-unstyled">
                                    <li>Madiun</li>
                                    <li>East Java</li>
                                </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact</h4>
                                <ul className="list-unstyled">
                                    <li>fdflower@gmail@gmail.com</li>
                                </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Social Media</h4>
                                <ul className="list-unstyled">
                                    <li>IG : fdFlowerss.ind</li>
                                </ul>
                        </div>              
                    </div>
                    <div className="footer-bottom">
                        <p className="text-center">
                            &copy;{new Date().getFullYear()} - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </FooterContainer> 
        
    );
}

export default Footer

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
 }

.footer-botton {
     padding-top: 3rem;
     padding-botton: 2rem;
 }
`;