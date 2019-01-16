import axios from 'axios'

class DataService {
  async getLeague(division) {
    const resp = await axios.get(`https://jleague-api.herokuapp.com/division/${division}/league`)

    return resp.data
  }

  async getResults(division) {
    const resp = await axios.get(`https://jleague-api.herokuapp.com/division/${division}/results`)

    return resp.data
  }

  async getPlayers(division) {
    const resp = await axios.get(`https://jleague-api.herokuapp.com/players`)

    return resp.data
  }

  async reportResult(division, points, winnerId, loserId) {
    const body = {
      category: 'PINGPONG',
      season: 0,
      winnerId,
      loserId,
      points,
      division,
    }

    const resp = await axios.post(`https://jleague-api.herokuapp.com/division/${division}`, body)

    return resp.data
  }
}

export default new DataService()