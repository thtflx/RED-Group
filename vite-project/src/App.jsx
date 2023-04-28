import React from 'react'
import './App.css'
import Articles from './Articles'
import { BrowserRouter as Router, Switch, Route } from 'react-router'
import About from './About'
import Header from './Header'

function App() {

  return (
    <div style={{padding: '20px 40px'}}>
      <Header />
      <Router>
        <Switch>
          <Route path='/' exact={true}>
            <Articles />
          </Route>
          
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App
