import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import './BarChartDetail.scss';

class SankeyDiagramDetail extends React.Component {
  componentDidMount() {
    let chart = am4core.create("sankey", am4charts.SankeyDiagram);
    chart.data = [
      { from: "J", to: "F", value: 10 },
      { from: "F", to: "Mar", value: 8 },
      { from: "Mar", to: "Apr", value: 4 },
      { from: "Apr", to: "May", value: 3 },
      { from: "May", to: "Jun", value: 5 },
      { from: "Jun", to: "Jul", value: 2 },
      { from: "Jul", to: "Aug", value: 3 },
    ];

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";
  }
  render() {
    return <div id="sankey" />;
  }
}

export default SankeyDiagramDetail;