import React from "react";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header-section">
        <h1 className="header-section__title">Dashboard</h1>
        {/* <nav className="user-menu">
          <i className="fas fa-user-circle" alt="Default avatar" />
          <button className="user-menu__button">
            <i className="fas fa-arrow-down" alt="" />
          </button>
        </nav> */}
      </header>
    );
  }
}

export default Header;
