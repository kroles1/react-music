import React, {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'
import { AlbumContext } from '../AlbumContext'

export default function Albums() {
  const [albums, setAlbums] = useState(AlbumContext)

  return (
    <div>
       {/* {albums.map(album => (
    <Album name={album.name} release={album.release} cover={album.cover} key={album.id}/>
    ))} */}
      <h1>Albums you mind be interested in:</h1>
      <br/>
      <Link to="LedZeppelin" >Led Zeppelin</Link>
      <br/>
      <Link to="LedZeppelinII">Led Zeppelin II</Link>
      <br/>
      <Link to="Led ZeppelinIII">Led Zeppelin III</Link>
      <br/>
      <Link to="Led ZeppelinIV">Led Zeppelin IV</Link>
      <Outlet/>
    </div>
  )
}
