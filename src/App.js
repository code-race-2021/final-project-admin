import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
