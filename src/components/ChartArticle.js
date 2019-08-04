import React from "react";
import "./ChartArticle.scss";
import PropTypes from "prop-types";
import SankeyDiagram from "./SankeyDiagram";

class ChartArticle extends React.Component {
  render() {
    const { firstLineClass, defaultImage, defaultImageText } = this.props;
    return (
      <article className="charts-article">
        <div className={`charts-article__line ${firstLineClass}`} />
        <div className="charts-article__circle" />
        <div className="charts-article__line second" />
        {defaultImage ? (
          <img
            className="charts-article__default-image"
            src={defaultImage}
            alt={defaultImageText}
          />
        ) : (
          <div className="chart-sankey__wrapper">
            <SankeyDiagram />
          </div>
        )}
      </article>
    );
  }
}

ChartArticle.propTypes = {
  firstLineClass: PropTypes.string.isRequired,
  defaultImageText: PropTypes.string
};

export default ChartArticle;
