import LoginOutBtn from '../LoginBtn/LoginOutBtn';
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={`d-flex align-items-center justify-content-between ${s.container}`} style={{gap:'10px'}}>
            <div className={`d-flex align-center gap-4`}>
                <NavLink to='/' className={s.title}>AnimeLove</NavLink>
                <div className={`d-flex align-items-center gap-4 `}>
                    <NavLink to='/anime' className={s.link}>Anime</NavLink>
                    <NavLink to='/manga' className={s.link}>Manga</NavLink>
                </div>
            </div>
            {/* <LoginOutBtn/> */}
            <NavLink to='/favorites' className={s.title}>❤</NavLink>
        </header>
    )
}

export default Header;