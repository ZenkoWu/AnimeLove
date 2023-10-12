import { useState } from 'react';
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    const [searched, setSearched] = useState(false)
    const [searchText, setSearchText] = useState('')

    return (
        <header className={`d-flex align-items-center justify-content-between ${s.container}`} style={{gap:'10px'}}>
            <div className={`d-flex align-center gap-4`}>
                <NavLink to='/' className={s.title}>AnimeLove</NavLink>
                <div className={`d-flex align-items-center gap-4 `}>
                    <NavLink to='/anime' className={s.link}>Anime</NavLink>
                    <NavLink to='/manga' className={s.link}>Manga</NavLink>
                </div>
            </div>

            <div className='d-flex align-items-center gap-4'>
                {
                    searched ? 
                    <div className='d-flex align-items-center gap-2 '>
                        <input 
                            type='text' 
                            placeholder='search...' 
                            className='rounded-3 px-3 py-1'
                            onChange={(e)=> {
                                setSearchText(e.target.value)
                            }}
                            value={searchText}
                            />
                        <div onClick={()=> setSearched(false)}>
                            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Menu / Close_SM">
                                <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </div>

                    </div>
                    :
                    <div className='' onClick={()=> setSearched(true)}>
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                }
               
                <NavLink to='/favorites' className={s.title}>❤</NavLink>
            </div>
        </header>
    )
}

export default Header;