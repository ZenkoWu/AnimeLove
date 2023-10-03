import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Anime from './Anime/Anime';
import AnimeDescription from './AnimeDescription/AnimeDescription';
import Footer from './Footer/Footer';
import Manga from './Manga/Manga';

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
