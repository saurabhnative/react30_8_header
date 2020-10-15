import React from 'react';
import Food from './components/Food';
import Contact from './components/Contact';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog ,faHome, faBone, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            <FontAwesomeIcon icon={faDog} />
            <span className="ml-1">Dogs</span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className={"nav-link"}>
                <FontAwesomeIcon icon={faHome} />
                <span className="ml-1">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/food" className={"nav-link"}>
                <FontAwesomeIcon icon={faBone} />
                <span className="ml-1">Food</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={"nav-link"}>
                <FontAwesomeIcon icon={faAddressCard} />
                <span className="ml-1">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
