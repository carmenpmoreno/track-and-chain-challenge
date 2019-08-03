import React from 'react';
import './App.scss';
import barDefaultImage from '../images/bar-chart.png';
import temperatureDefaultImage from '../images/temperature-changes-chart.png';
import ChartsMenuList from '../components/ChartsMenuList';
import ChartArticle from '../components/ChartArticle';

function App() {
  return (
    <div className="App">
      
      <header className="header-section">
        <h1 className="header-section__title">Dashboard</h1>
        <nav className="user-menu">
          <i className="fas fa-user-circle" alt="Default avatar" />
          <button className="user-menu__button">
            <i className="fas fa-arrow-down" alt="" />
          </button>
        </nav>
      </header>

      <main className="main-section">
        <nav className="charts-menu ">
          <ChartsMenuList
            ulClassName="charts-menu__mobile"
          />
          <ChartsMenuList
            ulClassName="charts-menu__tablet-desktop"
            barChartTitle="Bar Chart"
            lineChartTitle="Line Chart"
            dataChartTitle="Data Chart"
          />
        </nav>
        <section className="charts-section">
          <ChartArticle
            firstLineClass="first__bar-chart"
            defaultImage={barDefaultImage}
            defaultImageText="default Bar Chart"
          />
          <ChartArticle
            firstLineClass="first__line-chart"
            defaultImage={temperatureDefaultImage}
            defaultImageText="default line Chart"
          />
        </section>
      </main>

    </div>
  );
}

export default App;
