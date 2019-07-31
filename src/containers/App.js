import React from 'react';
import './App.scss';
import icoMenu from '../images/ico-menu.svg';
import barChartImage from '../images/bar-chart.png';

function App() {
  return (
    <div className="App">
      <header className="header-section">
        <h1 className="header-section__title">Dashboard</h1>
        <nav className="user-menu">
          <div>
            <i className="fas fa-user-circle" alt="Default avatar" />
          </div>
          <button className="user-menu__button">
            <i className="fas fa-arrow-down" alt="" />
          </button>
        </nav>
      </header>
      <main className="main-section">
        <nav className="charts-menu">
          <button className="charts-menu__button">
            <img src={icoMenu} alt=""></img>
          </button>
          <ul className="charts-menu__list">
            <li className="charts-menu__item">
              <i className="fas fa-chart-bar" alt="" />
            </li>
            <li className="charts-menu__item">
              <i className="fas fa-chart-line" alt="" />
            </li>
            <li className="charts-menu__item">
              <i className="fas fa-table" alt="" />
            </li>
          </ul>
        </nav>
        <section className="charts-section">
          <article className="charts-article">
            <div className="charts-article__line"></div>
            <div className="charts-article__circle"></div>
            <div className="charts-article__line"></div>
            <div className="charts-article__image-wrapper">
              <img className="charts-article__default-image" src={barChartImage} alt="default Bar Chart" />
            </div>
          </article>
        </section>
      </main>

    </div>
  );
}

export default App;
