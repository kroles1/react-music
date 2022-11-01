import React, {useState} from 'react'

export default function AlbumItem({album, updateAlbums}) {
    const [like, setLike] = useState(false);

    function handleDelete () {
        updateAlbums(prevAlbums => prevAlbums.filter((el) => album.id !== el.id))
      }


  return (
    <div className="card" key={album.id}>
        <h1 className="card-name">Album name: {album.name}</h1>
        <h2>Release date: {album.release}</h2>
        <img style={{width: 500}} src={album.cover}></img>
        <button onClick={handleDelete} className="trash-btn">X</button>
        <button onClick={() => setLike((prevState) => !prevState)}>{like ? "Thanks for your love 💙 " : " 👍 "}</button>
    </div>
  )
}
