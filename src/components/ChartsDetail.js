import React from "react";
import "./ChartsDetail.scss";
import barDefaultImage from "../images/bar-chart.png";
import temperatureDefaultImage from "../images/temperature-changes-chart.png";

class ChartsDetail extends React.Component {
  render() {
    console.log(this.props);
    const { data, match } = this.props;
    const chartId = match.params.chartId;
    console.log(chartId);
    const item = data.find(item => item.chartId === chartId);

    return (
      <>
        {chartId === "bar-chart" ? (
          <img
            className={item.className}
            src={barDefaultImage}
            alt={item.defaultImageText}
          />
        ) : (
            <img
            className={item.className}
            src={temperatureDefaultImage}
            alt={item.defaultImageText}
          />
        )}
      </>
    );
  }
}

export default ChartsDetail;
