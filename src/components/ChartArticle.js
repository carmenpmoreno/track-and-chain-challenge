import React from 'react';
import './ChartArticle.scss';
import PropTypes from 'prop-types';

class ChartArticle extends React.Component {
    render() {
        const {firstLineClass, defaultImage, defaultImageText} = this.props;
        return(
            <article className="charts-article">
            <div className={`charts-article__line ${firstLineClass}`}></div>
            <div className="charts-article__circle"></div>
            <div className="charts-article__line second"></div>
              <img className="charts-article__default-image" src={defaultImage} alt={defaultImageText} />
          </article>
        );
    }
}

ChartArticle.propTypes = {
    firstLineClass: PropTypes.string.isRequired,
    defaultImageText: PropTypes.string,
}

export default ChartArticle;