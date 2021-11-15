import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import UserTable from './pages/UserTable';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/UserTable' exact component={UserTable} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
