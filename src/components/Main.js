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
          className: "bar-chart__default-image",
          defaultImageText: "default Bar Chart"
        },
        {
          chartId: "line-chart",
          className: "line-chart__default-image",
          defaultImageText: "default Line Chart"
        }
      ]
    };
  }
  render() {
    return (
      <main className="main-section">
        <nav className="charts-menu ">
          <ChartsMenuList ulClassName="charts-menu__mobile" />
          <ChartsMenuList
            ulClassName="charts-menu__tablet-desktop"
            barChartTitle="Bar Chart"
            lineChartTitle="Line Chart"
            dataChartTitle="Data Chart"
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
