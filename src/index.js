import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header/Header'
import Report from './pages/Report/Report'
import League from './pages/League/League'
import Results from './pages/Results/Results'

import { BrowserRouter, Route } from 'react-router-dom'

import './index.scss';

const App = () => (
  <BrowserRouter>
    <div className='app-container'>
      <Header />
      <Route path="/league" component={League} />
      <Route path="/results" component={Results} />
      <Route path="/report" component={Report} />
    </div>
  </BrowserRouter>
)

render(<App />, document.getElementById('root'));
