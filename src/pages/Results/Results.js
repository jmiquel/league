import React, { PureComponent } from 'react'
import DataService from '../../services/DataService'
import ResultList from '../../components/ResultList/ResultList'

import './results.scss'

export default class Results extends PureComponent {
  state = {
    resultsA: [],
    resultsB: [],
    allResultsA: [],
    allResultsB: [],
    playerClicked: '',
  }

  async componentDidMount() {
    const leagueResultsA = await this.getResults('A')
    const leagueResultsB = await this.getResults('B')

    console.log('leagueResultsA :', leagueResultsA);
    console.log('leagueResultsB :', leagueResultsB);

    this.setState({
      resultsA: leagueResultsA,
      allResultsA: leagueResultsA,
      resultsB: leagueResultsB,
      allResultsB: leagueResultsB,
    })
  }

  async getResults(division) {
    return await DataService.getResults(division)
  }

  //handleClick(player) {
    // const results = this.state.allResultsA

    // if (player === this.state.playerClicked) {
    //   this.setState({
    //     results,
    //   })
    // } else {
    //   const filteredResults = results.filter((result) => {
    //     return result.loser.name === player || result.winner.name === player
    //   })

    //   this.setState({
    //     allResultsA: this.state.allResultsA,
    //     playerClicked: player,
    //     resultsA: filteredResults,
    //   })
    // }
  //}

  render() {
    return (
      <div className='results-container'>
        <h2>Division A</h2>
        <ResultList
          data={this.state.resultsA}
          //handleClick={this.handleClick.bind(this)}
        />
        <h2>Division B</h2>
        <ResultList
          data={this.state.resultsB}
          //handleClick={this.handleClick.bind(this)}
        />
      </div>
    )
  }

}