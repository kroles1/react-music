import React, { useState } from 'react'

const Album = ({ name, release, cover}) => {

    const [like, setLike] = useState(false);

    return (
        <div>
            <h1 title="albumName">Album name: {name}</h1>
            <h2 title="releaseYear">Release date: {release}</h2>
            <img title='album_cover' style={{width: 500}} src={cover}></img>
            <button onClick={() => setLike((prevState) => !prevState)}>{like ? "Thanks for your love 💙 " : " 👍 "}</button>
        </div>
    )
}

export default Album;
