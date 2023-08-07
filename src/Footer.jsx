import * as React from "react";
import './Footer.css';
import headerLogo from './asset/HeaderLogo.svg';

export class Footer extends React.Component {

  render() {
    return (
      <div className="footerWrapper">
        <div className="footerLeft">
        <p className="powerBy">Powered by</p>
        <img src={headerLogo} className="footerLogo" alt="logo" />
        <p className="aboutUs">We're pioneering mutual fund gifting in India. And putting a giant smile on everyone’s face 😃</p>
        </div>
        <div className="footerRight">
            <p className="footerRightLeft">
            ©2023 Braveheart Labs India Pvt. Ltd. All rights reserved
            <br /><br />
            Contact us at — support@zeffo.in
            </p>
            <div className="footerRightRight">
            <a>Terms and Conditions</a>
            <a>Privacy Policy</a>
            <a>Cancellation and Refund Policy</a>
            <a>Shipping and Delivery Policy</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
