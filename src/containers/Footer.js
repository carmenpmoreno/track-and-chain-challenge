import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-section">
        <small className="footer-section__copy"> ©Copy Dashboard</small>
        <p className="footer-section__p">Powered by Carmen</p>
      </footer>
    );
  }
}

export default Footer;
