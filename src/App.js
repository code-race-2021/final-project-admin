import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = { Home } />
        <Route exact path="/create-form/:type" component = { Form } />
      </Switch>
    </Router>
  );
}

export default App;
