import React, {useState, useEffect} from 'react'; 
import { AlbumForm, AlbumList } from './components';
import { Home, Artist, Albums, NotFound, Album, AxiosLyrics, AlbumProvider } from './pages';
import { Header} from './layout';
import {Routes, Route} from 'react-router-dom';
// import './App.css'


const App = () => {
    const [albums, updateAlbums] = useState([]);

    const addAlbum = (album) => {
        updateAlbums([...albums, album])
    };

    const[rectColor, rectColorSet] = useState('red')
    useEffect(() => {
        if (rectColor === 'red' || rectColor === 'white') {
            const timeoutID = setTimeout(() => {
                rectColorSet(rectColor === 'red' ? 'white' : 'red');
                document.body.style.backgroundColor = rectColor
            }, 6000);
            return () => clearTimeout(timeoutID);
        }
    });

    return ( 
        <>
        <Header/> 
        <AlbumProvider>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/axioslyrics" element={<AxiosLyrics/>} ></Route>
            <Route path="/artist" element={<Artist/>} ></Route>
           
                <Route path="albums" element={<Albums/>}>
                    <Route path=":name" element={<Album/>}></Route>
                </Route>
                <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </AlbumProvider>
        </>
)};

export default App;
