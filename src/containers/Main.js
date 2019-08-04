import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Main.scss";
import ChartsMenuList from "../components/ChartsMenuList";
import HomeChartsSection from "../components/HomeChartsSection";
import ChartsDetail from "../components/ChartsDetail";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          chartId: "bar-chart",
          chartTitle: "Bar Chart",
          detailClassName: "bar-chart__default-image",
          buttonClassName: "fas fa-chart-bar",
          defaultImageText: "default Bar Chart"
        },
        {
          chartId: "line-chart",
          chartTitle: "Line Chart",
          homeClassName: "line-chart__default-image",
          buttonClassName: "fas fa-chart-line",
          defaultImageText: "default Line Chart"
        },
        {
          chartId: "table-chart",
          chartTitle: "Data Chart",
          homeClassName: "line-chart__default-image",
          buttonClassName: "fas fa-table",
          defaultImageText: "default Table Chart"
        }
      ]
    };
  }
  render() {
    return (
      <main className="main-section">
        <nav className="charts-menu ">
          <ChartsMenuList
            ulClassName="charts-menu__mobile"
            data={this.state.data}
          />
          <ChartsMenuList
            ulClassName="charts-menu__tablet-desktop"
            data={this.state.data}
          />
        </nav>
        <section className="charts-section">
          <Switch>
            <Route exact path="/" render={() => <HomeChartsSection />} />
            <Route
              path="/chart-detail/:chartId"
              render={routerProps => (
                <ChartsDetail
                  match={routerProps.match}
                  data={this.state.data}
                />
              )}
            />
          </Switch>
        </section>
      </main>
    );
  }
}
export default Main;
