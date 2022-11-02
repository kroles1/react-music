import React from "react";
import AlbumItem from "../AlbumItem";
import Albums from '../../pages/Albums'

export default function AlbumList({albums, updateAlbums}) {
    return (
      <div>
        {albums.map((album) => {
          return<AlbumItem album={album} updateAlbums={updateAlbums}/>
        })}
      </div>
    );
  }
