import { useDispatch, useSelector } from 'react-redux';
import s from './BtnGroup.module.css'
import {useState} from 'react'
import { createPortal } from 'react-dom';
import { NavLink } from "react-router-dom";
import SearchContainer from '../SearchContainer/SearchContainer';
import { flexPlace } from '../../../utils/flexPlace';
import { TState } from '../../../redux/store';
import { commonActions } from '../../../redux/features/common';
import { Modal } from '../../Modal/Modal';

export const BtnGroup = ({width}: {width: number}) => {
    const [searched, setSearched] = useState(false)
    const favCount = useSelector((state: TState) => state.favorites.count)
    const isSafeContent = useSelector((state: TState) => state.common.isSafeContent)

    const [opened, setOpened] = useState(false)

    const dispatch = useDispatch()

    const changeContentMode = () => (
        isSafeContent ? setOpened(true) : dispatch(commonActions.setSafeContent(true))
    )
    return (
        <div className={`${flexPlace('between', 'center')} gap-3`}>
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
            { 
                !(searched && width < 1150) && 
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
            }
            <SearchContainer searched={searched} setSearched={setSearched}/>
            { 
                !(searched && width < 1085) &&  
                <NavLink to='/favorites' className={s.title}>
                    ❤<span className='fs-5'>{favCount > 0 && favCount}</span>
                </NavLink>
            }
        </div>
    )
}