import React from "react";
import "./ChartMenuButton.scss";
import PropTypes from "prop-types";

class ChartsMenuButton extends React.Component {
  render() {
    const {
      iconClassName,
      chartTitle,
      handleButtonClick,
      secondClassName
    } = this.props;
    console.log(chartTitle);
    return (
      <>
        {chartTitle === "Bar chart" ? (
          <button
            className={`charts-menu__button ${secondClassName}`}
            onClick={handleButtonClick}
          >
            <i className={iconClassName} alt={chartTitle} />
          </button>
        ) : (
          <button className="charts-menu__button" onClick={handleButtonClick}>
            <i className={iconClassName} alt={chartTitle} />
          </button>
        )}
      </>
    );
  }
}

ChartsMenuButton.propTypes = {
  iconClassName: PropTypes.string.isRequired,
  chartTitle: PropTypes.string
};

export default ChartsMenuButton;
