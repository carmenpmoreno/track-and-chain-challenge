import React from "react";
import "./ChartsMenuList.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ChartsMenuButton from "./ChartMenuButton";

class ChartsMenuList extends React.Component {
  render() {
    const { data, handleButtonClick } = this.props;
    console.log(handleButtonClick);
    return (
      <nav className="charts-menu ">
        <ul className="charts-menu__list">
          <li className="charts-menu__item">
            <Link className="charts-menu__button__link" to="/">
              <ChartsMenuButton
                iconClassName="fas fa-chart-bar"
                chartTitle="Bar chart"
                handleButtonClick={handleButtonClick}
              />
            </Link>
          </li>
          {data.map(item => {
            return (
              <li className="charts-menu__item" key={item.chartId}>
                <Link
                  className="charts-menu__button__link"
                  to={`/chart-detail/${item.chartId}`}
                >
                  <ChartsMenuButton
                    iconClassName={item.iconClassName}
                    chartTitle={item.chartTitle}
                    handleButtonClick={handleButtonClick}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

ChartsMenuList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default ChartsMenuList;
