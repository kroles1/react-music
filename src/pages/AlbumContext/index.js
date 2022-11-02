import React, { createContext, useState } from 'react';
import Album from '../Album';

let albumData = [
    {
        name:"Led Zeppelin", 
        release:"1969", 
        cover:"https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png",
        id: 2345
    },
    {
        name:"Led Zeppelin II", 
        release:"1969",
        cover:"https://m.media-amazon.com/images/I/51h-cJeHf0L.jpg",
        id: 3874
    },
    {
        name:"Led Zeppelin III", 
        release:"1970", 
        cover:"https://m.media-amazon.com/images/I/81elx3TCpqL.jpg",
        id: 3983
    },
    {
        name:"Led Zeppelin IV", 
        release:"1971",
        cover:"https://m.media-amazon.com/images/I/51h-cJeHf0L.jpg",
        id: 2987
    }
];


export const AlbumContext = createContext();

export const AlbumProvider = (props) => {
    const [albums, setAlbums] = useState(albumData)
  return (
    <AlbumContext.Provider value={[albums, setAlbums]}>
            {props.children}
        </AlbumContext.Provider>
  )
}
