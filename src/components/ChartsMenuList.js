import React from 'react';
import './ChartsMenuList.scss';
import PropTypes from 'prop-types';

class ChartsMenuList extends React.Component {
    render() {
        const {ulClassName, barChartTitle, lineChartTitle, dataChartTitle } = this.props;
        return(
            <ul className={ulClassName}>
            <li className="charts-menu__item">
              <i className="fas fa-chart-bar" alt="" />
              {barChartTitle}
            </li>
            <li className="charts-menu__item">
              <i className="fas fa-chart-line" alt="" />
              {lineChartTitle}
            </li>
            <li className="charts-menu__item">
              <i className="fas fa-table" alt="" />
              {dataChartTitle}
            </li>
          </ul>

        );

    }
}

ChartsMenuList.propTypes = {
  ulClassName: PropTypes.string.isRequired,
  barChartTitle: PropTypes.string,
  lineChartTitle: PropTypes.string,
  dataChartTitle: PropTypes.string,

}

export default ChartsMenuList;