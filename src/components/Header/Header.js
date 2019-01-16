import React, { PureComponent } from 'react'
import Menu from '../Menu/Menu'

import './header.scss'

export default class Header extends PureComponent {
  render() {
    return (
      <div className="header-container">
        <Menu />
      </div>
    )
  }
}