import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './streak.scss'

export default class Streak extends PureComponent {
  createStreak = () => {
    let streak = []

    // Outer loop to create parent
    for (let i = 0; i < 5; i++) {
      const win = this.props.streak[i] 

      streak.push(
        <div key={i} className={win ? 'result won' : win !== undefined ? 'result lost' : 'result placeholder'}>
          { win ? 'W' : win !== undefined ? 'L' : ''}
        </div>
      )
    }
    return streak
  }


  render() {
    return(
      <div className="player-streak">
        {this.createStreak()}
      </div>
    )
  }
}