import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Hollywood from './Components/Hollywood';
import Bollywood from './Components/Bollywood';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={ Home } />
        <Route path="/home" exact component={ Home } />
        <Route path="/hollywood" exact component={ Hollywood } />
        <Route path="/bollywood" exact component={ Bollywood } />
      </Router>
    </div>
  );
}

export default App;
