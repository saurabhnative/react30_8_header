import React from 'react'
import Contact from './components/Contact'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Navigation from './container/NavigationTab'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/contact' component={Contact} />
          <Route path='/blog' component={Blog} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
