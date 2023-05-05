import React from 'react'
import Card from '../Card/Card'

const List = ({ data }) => {
    return (
        <div>
            {data.map((item, i) => (
                <Card key={i} {...item} />
            ))}
        </div>
)
}

export default List
