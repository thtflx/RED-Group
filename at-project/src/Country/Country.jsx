import React from 'react'
import { useParams } from 'react-router-dom'

const Country = ({ data }) => {
    const countryName = useParams().name;
    const item = data.find((item) => item.name.common === countryName);

    return (
        <>
            {item && item.name.common}
        </>
    )
}

export default Country
