import React from 'react'
import styles from './Home.module.css'

const CarItem = ({ car }) => {
    return (
        <div className={styles.item} key={car.id}>
            <div className={styles.image}
                style={{
                    backgroundImage: `url(${car.image})`
                }}
            />
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>${car.price}</p>
                <button>Read more</button>
            </div>
        </div>
    )
}

export default CarItem
