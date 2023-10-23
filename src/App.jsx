import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import Anime from './components/Anime/Anime';
import {AnimeDescription} from './components/Anime/AnimeDescription/AnimeDescription';
import {Footer} from './components/Footer/Footer';
import {Manga} from './components/Manga/Manga';
import Home from './components/Home/Home';
import { Favorites } from './components/Favorites/Favorites';
import { MangaDescription } from './components/Manga/MangaDescription/MangaDescription';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='anime' element={<Anime/>}/>
                    <Route path='anime/:animeId' element={<AnimeDescription/>}/>
                    <Route path='manga' element={<Manga/>}/>
                    <Route path='manga/:mangaId' element={<MangaDescription/>}/>
                    <Route path='favorites' element={<Favorites/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
