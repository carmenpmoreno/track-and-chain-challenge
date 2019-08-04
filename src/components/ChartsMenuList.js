import React from "react";
import "./ChartsMenuList.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ChartsMenuList extends React.Component {
  render() {
    const { ulClassName, data } = this.props;
    console.log("data en menuList", data);
    return (
      <ul className={ulClassName}>
        {data !== undefined
          ? data.map(item => {
              return (
                <li key={item.chartId}>
                  <Link
                    className="charts-menu__button__link"
                    to={`/chart-detail/${item.chartId}`}
                  >
                    <button className="charts-menu__button">
                      <i className={item.buttonClassName} alt="" />
                      {item.chartTitle}
                    </button>
                  </Link>
                </li>
              );
            })
          : console.log("data aún no ha llegado por props")}
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
