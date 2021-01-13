import React from 'react';
import DailyWeather from 'pages/DailyWeather';
import CurrentWeather from 'pages/CurrentWeather';
import { Header } from 'components/Header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { StyledApp } from './App.styles'
function App() {
  return (
    <StyledApp>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/daily' component={DailyWeather} />
          <Route path='/' component={CurrentWeather} />
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
