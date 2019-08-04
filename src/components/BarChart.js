import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import './BarChart.scss';

class BarChart extends React.Component {
  componentDidMount() {
    let chart = am4core.create("sankey", am4charts.SankeyDiagram);
    chart.data = [
      { from: "Apr", to: "May", value: 7 },
      { from: "May", to: "Jun", value: 5 },
      { from: "Jun", to: "Jul", value: 2 },
      { from: "Jul", to: "Aug", value: 3 },
      { from: "Aug", to: "Sept", value: 1 },
    ];

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";
  }
  render() {
    return <div id="sankey" className="bar-chart" />;
  }
}

export default BarChart;