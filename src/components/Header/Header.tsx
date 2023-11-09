import { useDispatch, useSelector } from 'react-redux';
import s from './Header.module.css'
import {useState} from 'react'
import { createPortal } from 'react-dom';
import { NavLink } from "react-router-dom";
import SearchContainer from './SearchContainer/SearchContainer';
import { flexPlace } from '../../utils/flexPlace';
import { TState } from '../../redux/store';
import { commonActions } from '../../redux/features/common';
import { Modal } from '../Modal/Modal';
import {NavBar} from './NavBar/NavBar';
import {BurgerMenu} from './NavBar/BurgerMenu/BurgerMenu';
import { getWindowSizes } from './NavBar/useWindowSizes';

const menuItems = [
    {
        route: '/',
        title:'Home',
        key: 0,
    },
    {
        route: '/anime',
        title:'Anime',
        key: 1,
    }, 
    {
        route: '/manga',
        title:'Manga',
        key: 2,
    },
    {
        route: '/characters',
        title:'Characters',
        key: 3,
    },

]

export const Header = () => { 
    const favCount = useSelector((state: TState) => state.favorites.count)
    const isSafeContent = useSelector((state: TState) => state.common.isSafeContent)

    const [opened, setOpened] = useState(false)

    const dispatch = useDispatch()

    const changeContentMode = () => (
        isSafeContent ? setOpened(true) : dispatch(commonActions.setSafeContent(true))
    )
    const [width, setWidth] = useState(getWindowSizes().width)

    window.addEventListener('resize', ()=> setWidth(()=> getWindowSizes().width ))

    return (
        <header className={`${s.container} ${flexPlace('between', 'center')}`} >
            {
                opened && 
                createPortal(
                    <Modal
                        opened={opened} 
                        setOpened={setOpened}  
                        onAccept={()=> dispatch(commonActions.setSafeContent(false))}
                        question={`
                            Are you sure you want to allow adult content 
                            and confirm that you are 18+?
                        `}
                        title={'Сonfirmation'}
                    />, 
                    document.getElementById('content')!
                )
            }
             <div className={`${flexPlace('between', 'center')} gap-4`}>
                <NavBar menuItems={menuItems} width={width}/>
                <BurgerMenu menuConfig={menuItems}/>
            </div> 
            
            <div className={`${flexPlace('between', 'center')} gap-3`}> 
                <div className="form-check form-switch fs-5 pb-1 ">
                    <input 
                        className={`form-check-input border ${!isSafeContent && 'border-primary'}`} 
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


