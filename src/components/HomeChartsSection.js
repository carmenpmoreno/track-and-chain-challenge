import React from "react";
import "./HomeChartsSection.scss";
import BarChart from "./BarChart";
import "./HomeChartsSection.scss";
import ChartArticle from "../components/ChartArticle";
import temperatureDefaultImage from "../images/temperature-changes-chart.png";

class HomeChartsSection extends React.Component {
  render() {
    return (
      <>
        <article className="home-chart__article ">
          <div className="bart-chart__wrapper">
            <BarChart />
          </div>
        </article>
      </>
    );
  }
}
export default HomeChartsSection;
