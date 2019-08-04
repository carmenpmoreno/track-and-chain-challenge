import React from "react";
import "./Main.scss";
import ChartsMenuList from "../components/ChartsMenuList";
import ChartArticle from "../components/ChartArticle";
import barDefaultImage from "../images/bar-chart.png";
import temperatureDefaultImage from "../images/temperature-changes-chart.png";

class Main extends React.Component {
  render() {
    return (
      <main className="main-section">
        <nav className="charts-menu ">
          <ChartsMenuList ulClassName="charts-menu__mobile" />
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
    );
  }
}
export default Main;
