import React, { PureComponent } from 'react'
import Streak from '../Streak/Streak'
import PropTypes from 'prop-types'

import './leagueTable.scss'

export default class LeagueTable extends PureComponent {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Player</th>
              <th>Games</th>
              <th>Points</th>
              <th>Streak</th>
            </tr>
          </thead>
          <tbody>
              {this.props.data.map((player, i) => {
                return(
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td className={`position-${i+1}`}>{player.name}</td>
                    <td>{player.games}</td>
                    <td>{player.points}</td>
                    <td><Streak streak={player.streak} games={player.games} /></td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}