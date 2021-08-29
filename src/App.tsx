import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Current from './components/Current';
import Result from './components/Result';
import AboutMe from './components/AboutMe';
import HisSelect from './components/HistorySelect';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>

      {/* template for /current */}
        <Route path="/" exact>
          <Current></Current>
        </Route>

        <Route path="/current" >
          <Current></Current>
        </Route>

      {/* template for /history/select */}
        <Route path="/history/select">
          <HisSelect></HisSelect>
        </Route>
        
      {/* template for /history/result */}
        <Route path='/history/result'>
         <Result></Result>
        </Route>


      {/* template for about me */}
        <Route path="/about">
          <AboutMe></AboutMe>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
