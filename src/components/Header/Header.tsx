import { useSelector } from 'react-redux';
import s from './Header.module.css'
import { NavLink, useNavigate } from "react-router-dom";
import SearchContainer from './SearchContainer/SearchContainer';
import { createFlexStyle } from '../../utils/createFlexStyle';
import { TState } from '../../redux/store';

const getRandomAnime = (
    navigate: (link: string, extra: {replace: boolean})=> void, 
    totalAnimeCount: number
) => {
    const randomAnimeId = Math.floor(Math.random() * totalAnimeCount) + 1;
    navigate(`anime/${randomAnimeId}`,{ replace: true })
}

export const Header = () => {
    const navigate = useNavigate();
    const totalAnimeCount = useSelector((state: TState) => state.animeList.totalAnimeCount)
    const favCount = useSelector((state: TState) => state.favorites.favoritesCount)

    return (
        <header className={`bgMainRed ${s.container} ${createFlexStyle()}`} >
            <div className={`d-flex align-items-center gap-4`}>
                <NavLink to='/' className={s.title}>AnimeLove</NavLink>
                <div className={`d-flex align-items-center gap-4`}>
                    <NavLink to='/anime' className={s.link}>Anime</NavLink>
                    <NavLink to='/manga' className={s.link}>Manga</NavLink>
                    <NavLink to='/characters' className={s.link}>Characters</NavLink>
                    <p 
                        className={`${s.link} m-0 cursor-pointer`}
                        onClick={()=>getRandomAnime(navigate, totalAnimeCount)}
                    >
                        Random anime
                    </p>
                </div>
            </div>
            <div className='d-flex align-items-center gap-4'>
                <SearchContainer/>
                <NavLink to='/favorites' className={s.title}>❤
                    <span className='fs-5'>{favCount}</span>
                </NavLink>
            </div>
        </header>
    )
}


