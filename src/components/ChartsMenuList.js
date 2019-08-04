import React from "react";
import "./ChartsMenuList.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ChartsMenuList extends React.Component {
  render() {
    const { ulClassName, data } = this.props;
    return (
      <ul className={ulClassName}>
        {ulClassName === "charts-menu__mobile"
          ? data.map(item => {
              return (
                <li key={item.chartId}>
                  <Link
                    className="charts-menu__button__link"
                    to={`/chart-detail/${item.chartId}`}
                  >
                    <button className="charts-menu__button">
                      <i className={item.buttonClassName} alt="" />
                    </button>
                  </Link>
                </li>
              );
            })
          : console.log("data aún no ha llegado por props")}
        {ulClassName === "charts-menu__tablet-desktop"
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
  data: PropTypes.arrayOf(PropTypes.object)
};

export default ChartsMenuList;
