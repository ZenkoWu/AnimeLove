import Paginator from '../Paginator/Paginator';
import {ElementCardFull} from '../ElementCardFull/ElementCardFull';
import s from './List.module.css'
import { useState } from 'react';
import {ElementCard} from '../ElementCard/ElementCard';

export const List = ({
    elementList, 
    changeCurrentPage, 
    currentPage, 
    totalElementCount, 
    title, 
    pageSize
}) => {
    const [isFullCard, setIsFullCard] = useState(false) // todo save this state localy

    return (
        <div className={s.container}>
            <div className={`${s.elementList}`}>
                <div className='d-flex justify-content-between align-items-center pt-2 pb-3'>
                    <span className={s.title}>{title} List</span>
                    <div className="form-check form-switch fs-4">
                        <input 
                            className="form-check-input border border-primary" 
                            type="checkbox" 
                            role="switch" 
                            id="flexSwitchCheckDefault"
                            onClick={()=> setIsFullCard(prev => !prev)}
                        />
                        {/* <label className="form-check-label" for="flexSwitchCheckDefault">Show full info</label> */}
                    </div>
                </div>
                {
                    isFullCard ? 
                    <div>
                        { 
                            elementList.data.map((el) => 
                                <ElementCardFull 
                                    category={title.toLowerCase()} 
                                    data={el} 
                                    key={el.mal_id}
                                />)
                        }
                    </div>
                    :
                    <div className='d-flex justify-between flex-wrap'>  
                        { 
                            elementList.data.map((el) => 
                                <ElementCard 
                                    category={title.toLowerCase()} 
                                    element={el} 
                                    key={el.mal_id}
                                />) 
                        }
                    </div> 
                }
                
                <Paginator 
                    totalElementCount={totalElementCount} 
                    pageSize={pageSize} 
                    onPageChange={changeCurrentPage} 
                    currentPage={currentPage}
                />
            </div>
        </div> 
    )
}