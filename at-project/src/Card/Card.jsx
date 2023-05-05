import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <Link to={`/country/${props.name.common}`}>
            <div>
                <div className='card px-2 py-2 border-black border-[2px]'>
                    <img className='flex justify-center ml-auto mr-auto' src={props.flags.png} />
                    <h3 className='flex justify-center ml-auto mr-auto'>{props.name.common}</h3>
                    <p className='flex justify-center ml-auto mr-auto'>{props.subregion}</p>
                </div>
            </div>
        </Link>
)
}

export default Card
