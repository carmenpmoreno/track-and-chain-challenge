import React from "react";
import "./ChartsMenuList.scss";
import PropTypes from "prop-types";

class ChartsMenuList extends React.Component {
  render() {
    const {
      ulClassName,
      barChartTitle,
      lineChartTitle,
      dataChartTitle
    } = this.props;
    return (
      <ul className={ulClassName}>
        <li>
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
