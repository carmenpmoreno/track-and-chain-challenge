import React from "react";
import "./ChartsMenuList.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ChartsMenuButton from "./ChartMenuButton";

class ChartsMenuList extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <nav className="charts-menu ">
        <ul className="charts-menu__list">
          <li>
            <Link className="charts-menu__button__link" to="/">
              <ChartsMenuButton iconClassName="fas fa-chart-bar" chartTitle="Bar chart" />
            </Link>
          </li>
          {data.map(item => {
            return (
              <li key={item.chartId}>
                <Link
                  className="charts-menu__button__link"
                  to={`/chart-detail/${item.chartId}`}
                >
                  <ChartsMenuButton iconClassName={item.iconClassName} chartTitle={item.chartTitle}/>
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
