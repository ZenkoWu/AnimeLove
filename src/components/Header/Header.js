import { useSelector } from 'react-redux';
import s from './Header.module.css'
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    // todo вынести рандом аниме кнопку в отдельный компонент для оптимизации
    const navigate = useNavigate();
    const totalAnimeCount = useSelector(state => state.animeList.totalAnimeCount)

    const getRandomAnime = () => {
        const randomAnimeId = Math.floor(Math.random() * (totalAnimeCount + 1))
        navigate(`anime/${randomAnimeId}`,{ replace: true })
    }

    return (
        <header className={`d-flex align-items-center justify-content-between ${s.container}`} style={{gap:'10px'}}>
            <div className={`d-flex align-center gap-4`}>
                <NavLink to='/' className={s.title}>AnimeLove</NavLink>
                <div className={`d-flex align-items-center gap-4`}>
                    <NavLink to='/anime' className={s.link}>Anime</NavLink>
                    <NavLink to='/manga' className={s.link}>Manga</NavLink>
                    <NavLink to='/characters' className={s.link}>Characters</NavLink>
                    <p type ='button' className={`${s.link} m-0`} onClick={getRandomAnime}>Random anime</p>
                </div>
            </div>
            <NavLink to='/favorites' className={s.title}>❤</NavLink>
        </header>
    )
}

export default Header;