import React from "react";
import "./ChartsDetail.scss";
import PropTypes from "prop-types";
import BarChart from "./BarChart";
import temperatureDefaultImage from "../images/temperature-changes-chart.png";
import dataTableDefaultImage from "../images/data-table.png";
import {Link} from 'react-router-dom';

class ChartsDetail extends React.Component {
  render() {
    const { data, match } = this.props;
    const chartId = match.params.chartId;
    const item = data.find(item => item.chartId === chartId);

    return (
      <>
        <article className="charts-detail__article">
          {chartId === "bar-chart" ? (
            <div className="bart-chart__wrapper">
              <BarChart />
            </div>
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
