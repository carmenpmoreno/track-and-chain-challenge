import React from "react";
import "./HomeChartsSection.scss";
import ChartArticle from "../components/ChartArticle";
import barDefaultImage from "../images/bar-chart.png";
import temperatureDefaultImage from "../images/temperature-changes-chart.png";

class HomeChartsSection extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}
export default HomeChartsSection;