import { useSelector } from 'react-redux';
import s from './Header.module.css'
import { NavLink, useNavigate } from "react-router-dom";
import SearchContainer from './SearchContainer/SearchContainer';

const getRandomAnime = (navigate, totalAnimeCount) => {
    const randomAnimeId = Math.floor(Math.random() * totalAnimeCount) + 1;
    navigate(`anime/${randomAnimeId}`,{ replace: true })
}

export const Header = () => {
    const navigate = useNavigate();
    const totalAnimeCount = useSelector(state => state.animeList.totalAnimeCount)

    return (
        <header className={`d-flex align-items-center justify-content-between ${s.container}`} >
            <div className={`d-flex align-center gap-4`}>
                <NavLink to='/' className={s.title}>AnimeLove</NavLink>
                <div className={`d-flex align-items-center gap-4`}>
                    <NavLink to='/anime' className={s.link}>Anime</NavLink>
                    <NavLink to='/manga' className={s.link}>Manga</NavLink>
                    <NavLink to='/characters' className={s.link}>Characters</NavLink>
                    <p 
                        className={`${s.link} m-0`}
                        onClick={()=>getRandomAnime(navigate, totalAnimeCount)}
                        type='button'
                    >
                        Random anime
                    </p>
                </div>
            </div>
            <div className='d-flex align-items-center gap-4'>
                <SearchContainer/>
                <NavLink to='/favorites' className={s.title}>❤</NavLink>
            </div>
        </header>
    )
}


