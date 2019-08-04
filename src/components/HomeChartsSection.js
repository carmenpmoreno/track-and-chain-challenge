import React from "react";
import "./HomeChartsSection.scss";
import ChartArticle from "../components/ChartArticle";
import temperatureDefaultImage from "../images/temperature-changes-chart.png";

class HomeChartsSection extends React.Component {
  render() {
    return (
      <>
        <ChartArticle
          firstLineClass="first__bar-chart"
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
