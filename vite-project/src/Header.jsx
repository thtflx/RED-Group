import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    
    const menu = [
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Pricing',
            link: '#'
        },
        {
            title: 'Dashboard',
            link: '#'
        },
    ]



    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img height='50' src="https://cdn.svgporn.com/logos/risingwave.svg" />
            </div>

            <div className={styles.wrapper}>
                <ul className={styles.menu}>
                    {menu.map((item, idx) => (
                        <li key={`menu item ${idx}`}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
                <div className={styles.buttons}>
                    <button className={styles['login-button']}>Login</button>
                    <button className={styles['sign-up-button']}>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Header
