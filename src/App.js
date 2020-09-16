import React from 'react';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/">
                  <a className={"nav-link"} href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/features">
                  <a className={"nav-link"} href="#">
                    Features
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/pricing">
                  <a className={"nav-link"} href="#">
                    Pricing
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/pricing">
            <Pricing />
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
