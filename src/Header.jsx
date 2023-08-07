import * as React from "react";
import './Header.css';
import headerLogo from './asset/HeaderLogo.svg';

export class Header extends React.Component {

  render() {
    return (
      <div className="headerWrapper">
          <img src={headerLogo} className="headerLogo" alt="logo" />
          <button className="buyButton">Buy gift card</button>
      </div>
    );
  }
}

export default Header;
