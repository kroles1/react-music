import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const Album = ({name, release, cover}) => {
    const params = useParams(); 
  
    const [like, setLike] = useState(false);

    return (
        <div>
            <h1 title="albumName">Album name: {params.name}</h1>
            <h2 title="releaseYear">Release date: {release}</h2>
            <img alt="cover" style={{width: 500}} src={cover}></img>
            <button onClick={() => setLike((prevState) => !prevState)}>{like ? "Thanks for your love 💙 " : " 👍 "}</button>
        </div>
    )
}

export default Album;
