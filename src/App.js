import React, {useState} from 'react'; 
import Artist from './components/Artist';
import Album from './components/Albums';
import { AlbumForm, AlbumList } from './components';


const App = (like, setLike) => {
    const [albums, updateAlbums] = useState([]);

    const addAlbum = (album) => {
        updateAlbums([...albums, album])
    };

    return ( 
        <>
        <h1>App</h1>
        <Artist name="Led Zeppelin" genre="Classic Rock" intro="Led Zeppelin were an English rock band formed in London in 1968. The group comprised vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music. Led Zeppelin have been credited as significantly impacting the nature of the music industry, particularly in the development of album-oriented rock (AOR) and stadium rock."/>
        <Album name="Led Zeppelin" release={1969} cover="https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png"/>
        <Album name="Led Zeppelin II" release={1969} cover="https://m.media-amazon.com/images/I/51h-cJeHf0L.jpg"/>
        <Album name="Led Zeppelin III" release={1970} cover="https://m.media-amazon.com/images/I/81elx3TCpqL.jpg"/>
        <Album name="Led Zeppelin IV" release={1971} cover="https://m.media-amazon.com/images/I/51h-cJeHf0L.jpg"/>
        <AlbumList albums={albums} updateAlbums={updateAlbums}/>
        <AlbumForm addAlbum={addAlbum}/>
        </>
)};

export default App;
