import React from 'react'
import {cars} from './cars.data.js'
import CarItem from './CarItem'



const Home = () => {
    return (
        <div>
            <h1>Cars catalog</h1>
            <div>
                {cars.length ? 
                    cars.map((car) => (
                        <CarItem key={car.id} car={car} />
                    )) 
                : <p>There are no cars.</p>}
            </div>
        </div>
    )
}

export default Home
