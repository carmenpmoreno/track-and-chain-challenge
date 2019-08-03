import React from 'react';
import './ChartsMenuList.scss';

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

export default ChartsMenuList;