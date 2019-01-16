import React, { PureComponent } from 'react'
import DataService from '../../services/DataService'
import LeagueTable from '../../components/LeagueTable/LeagueTable'

import './league.scss'

export default class League extends PureComponent {
  state = {
    divisionA: [],
    divisionB: [],
  }
  
  async getLeague(division) {
    return await DataService.getLeague(division)
  }

  async componentDidMount() {
    const leagueDataA = await this.getLeague('A')
    const leagueDataB = await this.getLeague('B')

    console.log('leagueDataA :', leagueDataA);

    this.setState({
      divisionA: leagueDataA,
      divisionB: leagueDataB,
    })
  }

  handleClick(player) {
    const results = this.state.allResults

    if (player === this.state.playerClicked) {
      this.setState({
        results,
      })
    } else {
      const filteredResults = results.filter((result) => {
        return result.loser.name === player || result.winner.name === player
      })

      this.setState({
        allResults: this.state.allResults,
        playerClicked: player,
        results: filteredResults,
      })
    }

  }

  render() {
    return (
      <div className='league-container'>
        <h2>Division A</h2>
        <LeagueTable
          data={this.state.divisionA}
        />
        <h2>Division B</h2>
        <LeagueTable
          data={this.state.divisionB}
        />
      </div>
    )
  }
}