import React from "react";
// import "./ChartsMenuButton.scss";
import PropTypes from "prop-types";

class ChartsMenuButton extends React.Component {
  render() {
    const { iconClassName, chartTitle } = this.props;
    return (
      <button className="charts-menu__button">
        <i className={iconClassName} alt="" />
        {chartTitle}
      </button>
    );
  }
}

ChartsMenuButton.propTypes = {
    iconClassName: PropTypes.string.isRequired,
    chartTitle: PropTypes.string,
};

export default ChartsMenuButton;
