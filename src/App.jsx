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
import { Characters } from './components/Characters/Characters';
import { CharactersDescription } from './components/Characters/CharactersDescription/CharactersDescription';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className="content" id='content'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='anime' element={<Anime/>}/>
                    <Route path='anime/:animeId' element={<AnimeDescription/>}/>
                    <Route path='manga' element={<Manga/>}/>
                    <Route path='manga/:mangaId' element={<MangaDescription/>}/>
                    <Route path='characters' element={<Characters/>}/>
                    <Route path='characters/:charactersId' element={<CharactersDescription/>}/>
                    <Route path='favorites' element={<Favorites/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
