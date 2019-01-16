import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './resultList.scss'

export default class ResultList extends PureComponent {
  handleClick(name) {
    this.props.handleClick(name)
  }

  render() {
    return (
      <div className="result-list-container">
        {this.props.data.map((result, i) => {
          return(
            <div key={i} className="result-list">
              <div
                className="result-item result-name winner"
                onClick={() => { this.handleClick(result.winner.name) }}>{ result.winner.name }</div>
              <div className="result-item result-score">2</div>
              <div className="result-item result-score dash">-</div>
              <div className="result-item result-score">{ result.points === 2 ? 0 : 1 }</div>
              <div
                className="result-item result-name loser"
                onClick={() => { this.handleClick(result.loser.name)}}>{ result.loser.name }</div>
            </div>
          )
        })}
      </div>
    )
  }
}