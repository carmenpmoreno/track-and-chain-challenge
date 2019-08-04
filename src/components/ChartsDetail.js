import React from "react";
import "./ChartsDetail.scss";
import barDefaultImage from "../images/bar-chart.png";
import temperatureDefaultImage from "../images/temperature-changes-chart.png";
import dataTableDefaultImage from "../images/data-table.png";

class ChartsDetail extends React.Component {
  render() {
    const { data, match } = this.props;
    console.log('data en detail', data);

    const chartId = match.params.chartId;
    console.log(chartId);
    const item = data.find(item => item.chartId === chartId);

    return (
      <>
        {chartId === "bar-chart" ? (
          <img
            className={item.detailClassName}
            src={barDefaultImage}
            alt={item.defaultImageText}
          />
        ) : (
          console.log("no es bar-chart")
        )}
        {chartId === "line-chart" ? (
          <img
            className={item.detailClassName}
            src={temperatureDefaultImage}
            alt={item.defaultImageText}
          />
        ) : (
          console.log("no es line-chart")
        )}
        {chartId === "table-chart" ? (
          <img
            className={item.detailClassName}
            src={dataTableDefaultImage}
            alt={item.defaultImageText}
          />
        ) : (
          console.log("no es table-chart")
        )}
      </>
    );
  }
}

export default ChartsDetail;
