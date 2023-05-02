import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import CarDetail from './CarDetail'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/'/>
                <Route element={<CarDetail />} path='/car/:id'/>

                <Route path='*' element={<div>Not found</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
