import React, { useState } from 'react'
import {cars as carsData} from './cars.data.js'
import CarItem from './CarItem'
import CreateCarForm from './CreateCarForm.jsx'



const Home = () => {
    const [cars, setCars] = useState(carsData);

    return (
        <div>
            <h1>Cars catalog</h1>
            <CreateCarForm setCars={setCars} />
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
