import s from './Header.module.css'
import {useState} from 'react'
import { flexPlace } from '../../utils/flexPlace';
import {NavBar} from './NavBar/NavBar';
import {BurgerMenu} from './NavBar/BurgerMenu/BurgerMenu';
import { getWindowSizes } from './NavBar/useWindowSizes';
import { BtnGroup } from './BtnGroup/BtnGroup';

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
    const [width, setWidth] = useState(getWindowSizes().width)
    window.addEventListener('resize', ()=> setWidth(()=> getWindowSizes().width ))

    return (
        <header className={`${s.container} ${flexPlace('between', 'center')}`}>
             <div className={`${flexPlace('between', 'center')} gap-4`}>
                <NavBar menuItems={menuItems} width={width}/>
                <BurgerMenu menuConfig={menuItems}/>
            </div> 
            <BtnGroup width={width}/> 
        </header>
    )
}


