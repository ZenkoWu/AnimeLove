import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import SearchContainer from './SearchContainer/SearchContainer';

const Header = () => {
    return (
        <header className={`d-flex align-items-center justify-content-between  gap-4 ${s.container}`}>
            <div className={`d-flex align-center gap-4`}>
                <NavLink to='/' className={s.title}>AnimeLove</NavLink>
                <div className={`d-flex align-items-center gap-4 `}>
                    <NavLink to='/anime' className={s.link}>Anime</NavLink>
                    <NavLink to='/manga' className={s.link}>Manga</NavLink>
                </div>
            </div>

            <div className='d-flex align-items-center gap-4'>
                <SearchContainer/>
                <NavLink to='/favorites' className={s.title}>❤</NavLink>
            </div>
        </header>
    )
}

export default Header;