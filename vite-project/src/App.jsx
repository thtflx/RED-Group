import React from 'react'
import Articles from './Articles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'



function App() {

  return (
    <div style={{padding: '20px 40px'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact={true}>
            <Articles />
          </Route>
          
          <Route path='/about'>
            <About />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
