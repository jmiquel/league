import React from 'react'
import { Link } from "react-router-dom";

import './menu.scss'

export default () => (
  <div className="menu-wrapper">
    <ul>
      <li><Link to="/league">League</Link></li>
      <li><Link to="/results">Results</Link></li>
      <li><Link to="/report">Report</Link></li>
    </ul>
  </div>
)