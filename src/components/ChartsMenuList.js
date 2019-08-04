import React from "react";
import "./ChartsMenuList.scss";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class ChartsMenuList extends React.Component {
  render() {
    const {
      ulClassName,
      barChartTitle,
      lineChartTitle,
      dataChartTitle,
      data
    } = this.props;
    return (
      <ul className={ulClassName}>
        <li>
        {/* <Link className="charts-menu__button__link" to={`/chart-detail/${item.id}`}></Link> */}
          <button className="charts-menu__button">
            <i className="fas fa-chart-bar" alt="" />
            {barChartTitle}
          </button>
        </li>
        <li>
          <button className="charts-menu__button">
            <i className="fas fa-chart-line" alt="" />
            {lineChartTitle}
          </button>
        </li>
        <li>
          <button className="charts-menu__button">
            <i className="fas fa-table" alt="" />
            {dataChartTitle}
          </button>
        </li>
      </ul>
    );
  }
}

ChartsMenuList.propTypes = {
  ulClassName: PropTypes.string.isRequired,
  barChartTitle: PropTypes.string,
  lineChartTitle: PropTypes.string,
  dataChartTitle: PropTypes.string
};

export default ChartsMenuList;
