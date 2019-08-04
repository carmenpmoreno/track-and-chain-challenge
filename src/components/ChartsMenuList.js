import React from "react";
import "./ChartsMenuList.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ChartsMenuButton from "./ChartMenuButton";

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
                    <ChartsMenuButton iconClassName={item.iconClassName} />
                  </Link>
                </li>
              );
            })
          : data.map(item => {
              return (
                <li key={item.chartId}>
                  <Link
                    className="charts-menu__button__link"
                    to={`/chart-detail/${item.chartId}`}
                  >
                    <ChartsMenuButton
                      iconClassName={item.iconClassName}
                      chartTitle={item.chartTitle}
                    />
                  </Link>
                </li>
              );
            })}

        {ulClassName === "charts-menu__mobile" ? (
          <li>
            <Link className="charts-menu__button__link" to="/">
              <ChartsMenuButton iconClassName="fas fa-home" />
            </Link>
          </li>
        ) : (
          <li>
            <Link className="charts-menu__button__link" to="/">
              <ChartsMenuButton iconClassName="fas fa-home" chartTitle="Menu" />
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

ChartsMenuList.propTypes = {
  ulClassName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default ChartsMenuList;
