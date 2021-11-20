import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import UserTable from './pages/UserTable';
import AttendancePage from './pages/AttendancePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/UserTable' exact component={UserTable} />
          <Route path='/users/' exact component={UserTable} />
          <Route path='/devices/' exact component={AttendancePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
