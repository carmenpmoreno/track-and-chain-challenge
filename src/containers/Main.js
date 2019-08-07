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
          chartId: "pie-chart",
          chartTitle: "Pie Chart",
          homeClassName: "pie-chart__default-image",
          iconClassName: "fas fa-chart-pie",
          defaultImageText: "default Pie Chart"
        },
        {
          chartId: "line-chart",
          chartTitle: "Line Chart",
          homeClassName: "line-chart__default-image",
          iconClassName: "fas fa-chart-line",
          defaultImageText: "default Line Chart"
        },
        {
          chartId: "table-chart",
          chartTitle: "Data Chart",
          homeClassName: "data-chart__default-image",
          iconClassName: "fas fa-table",
          defaultImageText: "default Table Chart"
        }
      ]
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    const buttonList = document.querySelectorAll(".charts-menu__button");
    console.log(buttonList);
      for (const button of buttonList) {
        button.classList.remove("checked-button");
      }
      event.currentTarget.classList.add("checked-button");
  }
  render() {
    return (
      <main className="main-section">
        <ChartsMenuList
          data={this.state.data}
          handleButtonClick={this.handleButtonClick}
        />
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
