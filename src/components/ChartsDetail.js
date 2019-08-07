import React from "react";
import "./ChartsDetail.scss";
import PropTypes from "prop-types";
import temperatureDefaultImage from "../images/temperature-changes-chart.png";
import dataTableDefaultImage from "../images/data-table.png";
import pieChartDefaultImage from "../images/pie-chart.png";

class ChartsDetail extends React.Component {
  render() {
    const { data, match } = this.props;
    const chartId = match.params.chartId;
    const item = data.find(item => item.chartId === chartId);

    return (
      <>
        <article className="charts-detail__article">
          {chartId === "pie-chart" ? (
            <img
              className="default-image-detail"
              src={pieChartDefaultImage}
              alt={item.defaultImageText}
            />
          ) : (
            console.log("no es line-chart")
          )}
          {chartId === "line-chart" ? (
            <img
              className="default-image-detail"
              src={temperatureDefaultImage}
              alt={item.defaultImageText}
            />
          ) : (
            console.log("no es line-chart")
          )}
          {chartId === "table-chart" ? (
            <img
              className="default-image-detail"
              src={dataTableDefaultImage}
              alt={item.defaultImageText}
            />
          ) : (
            console.log("no es table-chart")
          )}
        </article>
      </>
    );
  }
}
ChartsDetail.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object
};
export default ChartsDetail;
