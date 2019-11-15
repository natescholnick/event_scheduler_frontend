import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Schedule from './views/schedule';
import Events from './views/events';


function App() {
  return (
    <div className="App">
    <Header />
      <div className="container">
        <Switch>
          <Route exact path='/' render={() => <Schedule />} />
          <Route exact path='/events' render={() => <Events />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
