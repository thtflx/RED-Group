import React from 'react'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div>
            <h1>Cars catalog</h1>
            <div>
                <div className={styles.item}>
                    <div className={styles.image}
                        style={{
                            backgroundImage: 'url("https://s.auto.drom.ru/i24268/c/photos/fullsize/bmw/x7/bmw_x7_1069587.jpg")'
                        }}
                    />
                    <div className={styles.info}>
                        <h2>Car 1</h2>
                        <p>$100 000</p>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
