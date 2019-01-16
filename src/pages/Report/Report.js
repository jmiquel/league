import React, { Component } from 'react'
import DataService from '../../services/DataService'

import './report.scss'

export default class Report extends Component {
  state = {
    league: [],
    points: 1,
    division: 'A',
    winner: '',
    loser: '',
  }

  async componentDidMount() {
    const leagueData = await this.getPlayers()

    this.setState({
      league: leagueData,
    })
  }

  async handleClick() {
    const { division, points, winner, loser } = this.state
    const resp = await DataService.reportResult(division, points, winner, loser)
    console.log('resp :', resp);
  }

  handleChange(evt, name)  {
    this.setState({
      [name]: evt.target.value
    })
  }

  async getPlayers(division) {
    return await DataService.getPlayers()
  }

  render() {
    return (
      <div className="report-wrapper">
        <h5>Division</h5>
        <select onChange={(evt) => { this.handleChange(evt, 'division') }}>
          <option key='A' value='A'>A</option>
          <option key='B' value='B'>B</option>
          <option key='C' value='C'>C</option>
          <option key='D' value='D'>D</option>
        </select>
        <h5>Winner</h5>
        <select onChange={(evt) => { this.handleChange(evt, 'winner') }}>
          {this.state.league.map(player => {
            return (
              <option key={`winner-${player.id}`} value={player.id}>{player.name}</option>
            )
          })}
        </select>
        <h5>Loser</h5>
        <select onChange={(evt) => { this.handleChange(evt, 'loser') }}>
          {this.state.league.map(player => {
            return (
              <option key={`loser-${player.id}`} value={player.id}>{player.name}</option>
            )
          })}
        </select>
        <h5>Points</h5>
        <select onChange={(evt) => { this.handleChange(evt, 'points') }}>
          <option key='1' value='1'>1</option>
          <option key='2' value='2'>2</option>
        </select>
        <input type='button' onClick={(evt) => { this.handleClick() }} value='Report' />
      </div>
    )
  }
}