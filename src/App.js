import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Anime from './components/Anime/Anime';
import AnimeDescription from './components/Anime/AnimeDescription/AnimeDescription';
import Footer from './components/Footer/Footer';
import Manga from './components/Manga/Manga';
import Home from './components/Home/Home';

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
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
