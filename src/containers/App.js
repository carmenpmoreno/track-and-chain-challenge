import React from 'react';
import './App.scss';
import icoMenu from '../images/ico-menu.svg';

function App() {
  return (
    <div className="App">
      <header className="header-section">
        <h1 className="header-section__title">Dashboard</h1>
        <nav className="user-menu">
          <div>
            <i className="fas fa-user-circle" alt="Default avatar"/>
          </div>
          <button className="user-menu__button">
            <i className="fas fa-arrow-down"  alt="" />
          </button>
        </nav>
      </header>
      <main className="main-section">
        <nav className="stadistics-menu">
          <button className="stadistics-menu__button">
            <img src={icoMenu} alt=""></img>
          </button>
          <ul className="stadistics-menu__list">
            <li className="stadistics-menu__item">
              <i className="fas fa-chart-bar" alt="" />
            </li>
            <li className="stadistics-menu__item">
              <i className="fas fa-chart-line" alt="" />
            </li>
            <li className="stadistics-menu__item">
              <i className="fas fa-table" alt="" />
            </li>

          </ul>
        </nav>
        <section className="">
        </section>
      </main>

    </div>
  );
}

export default App;
