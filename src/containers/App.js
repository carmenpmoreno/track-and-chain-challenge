import React from 'react';
import './App.scss';
import icoMenu from '../icons/ico-menu.svg';
import barDefaultImage from '../images/bar-chart.png';
import temperatureDefaultImage from '../images/temperature-changes-chart.png';

function App() {
  return (
    <div className="App">
      <header className="header-section">
        <h1 className="header-section__title">Dashboard</h1>
        <nav className="user-menu">
          <div className="user-menu__item-wrapper">
            <i className="fas fa-user-circle" alt="Default avatar" />
          </div>
          <button className="user-menu__button">
            <i className="fas fa-arrow-down" alt="" />
          </button>
        </nav>
      </header>
      <main className="main-section">
        <nav className="charts-menu ">
          <button className="charts-menu__button">
            <img src={icoMenu} alt=""></img>
          </button>
          <ul className="charts-menu__list">
            <li className="charts-menu__item">
              <i className="fas fa-chart-bar" alt="" />
                Bar Chart
            </li>
            <li className="charts-menu__item">
              <i className="fas fa-chart-line" alt="" />
              Line Chart
            </li>
            <li className="charts-menu__item">
              <i className="fas fa-table" alt="" />
              Dat Table
            </li>
          </ul>
          {/* on default is hidden and shows the entire menu */}
          <ul className="charts-menu__close hidden">
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
          {/* .......................................... */}
        </nav>
        <section className="charts-section">

          <article className="charts-article-2 item-2">
            <div className="charts-article-2__line first"></div>
            <div className="charts-article__circle"></div>
            <div className="charts-article-2__line second"></div>
            <div className="charts-article__image-wrapper">
              <img className="charts-article__default-image" src={barDefaultImage} alt="default Bar Chart" />
            </div>
          </article>

          <article className="charts-article-2 item-3">
            <div className="charts-article-2__line first"></div>
            <div className="charts-article__circle"></div>
            <div className="charts-article-2__line first"></div>
            <div className="charts-article__circle"></div>
            <div className="charts-article-2__line second"></div>
            <div className="charts-article__image-wrapper">
              <img className="charts-article__default-image" src={temperatureDefaultImage} alt="default line Chart" />
            </div>
          </article>

        </section>
      </main>

    </div>
  );
}

export default App;
