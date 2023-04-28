import React, { useState } from 'react'
import styles from './Articles.module.css'
import axios from 'axios'

const Articles = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true) // делаем Loader

    // Выполнение запросов с помощью fetch
    React.useEffect(() => {
        const fetchData = async() => {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
                
                // если всё ок, закидываем в наш useState():
                setPosts(data);
            } catch (err) {
                console.log(err);
            }

            // и заканчиваем наш Loading
            setLoading(false)
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Articles</h1>

            {loading && 'Загрузка ...'}

            <div className={styles.wrapper}>
                {posts.map((post) => (
                    <div className={styles.card} key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>    
                        <a href="">Read now!</a>
                    </div>
                ))}
            </div>

            
        </div>
    )
}

export default Articles
