import React from 'react'

const Artist = ({name, genre, intro}) => {
    return (
        <>
            <h1>Artist: {name}</h1>
            <h2>Genre: {genre}</h2>
            <p>{intro}</p>
        </>
    )
}

export default Artist


