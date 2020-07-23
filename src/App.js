import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Bollywood from './Components/Bollywood';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={ Home } />
        <Route path="/home" exact component={ Home } />
        <Route path="/bollywood" exact component={ Bollywood } />
      </Router>
    </div>
  );
}

export default App;
