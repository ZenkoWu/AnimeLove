import { useDispatch, useSelector } from 'react-redux';
import s from './Header.module.css'
import {useState} from 'react'
import { createPortal } from 'react-dom';
import { NavLink, useNavigate } from "react-router-dom";
import SearchContainer from './SearchContainer/SearchContainer';
import { flexPlace } from '../../utils/flexPlace';
import { TState } from '../../redux/store';
import { commonActions } from '../../redux/features/common';
import { Modal } from '../Modal/Modal';

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

    const isSafeContent = useSelector((state: TState) => state.common.isSafeContent)
    const [opened, setOpened] = useState(false)
    const dispatch = useDispatch()
    const changeContentMode = () => isSafeContent ? setOpened(true) : dispatch(commonActions.setSafeContent(true))
    return (
        <header className={`bgMainRed ${s.container} ${flexPlace('between', 'center')}`} >
             {
                opened && 
                createPortal(
                <Modal
                    opened={opened} 
                    setOpened={setOpened}  
                    onAccept={()=> dispatch(commonActions.setSafeContent(false))}
                    question={`Are you sure you want to allow adult content 
                    and confirm that you are 18+?`}
                    title={'Сonfirmation'}
                />, document.getElementById('content')!)
            }
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
            <div className='d-flex align-items-center gap-3'>
                <div className="form-check form-switch fs-5 pb-1 ">
                    <input 
                        className={"form-check-input border" + (!isSafeContent + 'border-primary')} 
                        type="checkbox" 
                        role="switch" 
                        id="flexSwitchCheckDefault"
                        onClick={changeContentMode}
                        checked={!isSafeContent}
                    />
                </div>
                <SearchContainer/>
                <NavLink to='/favorites' className={s.title}>
                    ❤<span className='fs-5'>{favCount > 0 && favCount}</span>
                </NavLink>
            </div>
        </header>
    )
}


