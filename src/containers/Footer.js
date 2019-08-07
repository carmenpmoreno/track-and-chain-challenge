import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-section">
        <p className="footer-section__p">Track&Chain challenge</p>
        <small className="footer-section__copy"> ©Copy Dashboard</small>
        <p className="footer-section__p">Powered by Carmen Pilar</p>
      </footer>
    );
  }
}

export default Footer;
