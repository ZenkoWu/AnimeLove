import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {Anime} from './components/Anime/Anime';
import {Footer} from './components/Footer/Footer';
import {Manga} from './components/Manga/Manga';
import {Home} from './components/Home/Home';
import { Favorites } from './components/Favorites/Favorites';
import { Characters } from './components/Characters/Characters';
import { CharactersDescription } from './components/Characters/CharactersDescription/CharactersDescription';
import { ElementDescription } from './components/ElementDescription/ElementDescription';
import { API_ROUTES } from './redux/services/api/apiRoutes';

function App() {
    return (
        <BrowserRouter> 
            <Header/>
            <div className="content" id='content'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='anime'>
                        <Route index element={<Anime/>}/>
                        <Route path=':id' element={<ElementDescription route={API_ROUTES.ANIME}/>}/>
                    </Route>
                    <Route path='manga'>
                        <Route index element={<Manga/>}/>
                        <Route path=':id' element={<ElementDescription route={API_ROUTES.MANGA}/>}/>
                    </Route>
                    <Route path='characters'>
                        <Route index element={<Characters/>}/>
                        <Route path=':charactersId' element={<CharactersDescription/>}/>
                    </Route>
                    <Route path='favorites' element={<Favorites/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
