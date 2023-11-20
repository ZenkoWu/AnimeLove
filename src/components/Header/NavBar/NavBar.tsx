import { NavLink, useNavigate } from 'react-router-dom';
import s from './NavBar.module.css';
import { flexPlace } from '../../../utils/flexPlace';
import { API_ROUTES } from '../../../redux/services/api/apiRoutes';
import { useSelector } from 'react-redux';
import { TState } from '../../../redux/store';

const tabletWidth = 991

const getRandomAnime = (
    navigate: (link: string, extra: {replace: boolean}) => void, 
    totalAnimeCount: number
) => {
    const randomAnimeId = Math.floor(Math.random() * totalAnimeCount) + 1;
    navigate(`${API_ROUTES.ANIME}/${randomAnimeId}`, { replace: true })
}

export const NavBar = ({menuItems, width}: {
    menuItems: { 
        route: string,
        title: string,
        key: number
    }[],
    width: number
}) => {
    const navigate = useNavigate();
    const {totalAmount} = useSelector((state: TState) => state.pagination.anime)
  
    return (
        <div className={width > tabletWidth ? (`${flexPlace('between', 'center')} gap-4`): 'd-none'}>
            <NavLink to='/' className={s.title}>AnimeLove</NavLink>
                {
                    menuItems.map((link, i) => (
                        i != 0  &&
                        <NavLink to={link.route} className={s.link} key={link.key}>
                            {link.title}
                        </NavLink>
                    ))    
                }
            <p 
                className={`${s.link} m-0 cursor-pointer p-0`}
                onClick={()=>getRandomAnime(navigate, totalAmount)}
            >
                Random anime
            </p>
      </div>
    )
}
