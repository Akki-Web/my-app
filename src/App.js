import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import Register from './Register';
import Admin from './Admin';
import User from './User';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/ADMIN" component={Admin} />
        <Route path="/USER" component={User} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
