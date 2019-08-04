import React from "react";
import "./ChartsDetail.scss";
import PropTypes from "prop-types";
import barDefaultImage from "../images/bar-chart.png";
import temperatureDefaultImage from "../images/temperature-changes-chart.png";
import dataTableDefaultImage from "../images/data-table.png";

class ChartsDetail extends React.Component {
  render() {
    const { data, match } = this.props;
    const chartId = match.params.chartId;
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
ChartsDetail.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object
};
export default ChartsDetail;
