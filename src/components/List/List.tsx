import {Paginator} from '../Paginator/Paginator';
import {ElementCardFull} from './ElementCardFull/ElementCardFull';
import s from './List.module.css'
import { useState } from 'react';
import {ElementCard} from './ElementCard/ElementCard';
import { TMangaInfo,TAnimeInfo, TCategories } from '../../types/mainElementsTypes';
import { flexPlace } from '../../utils/flexPlace';

type TList = {
    elementsList: TAnimeInfo[] | TMangaInfo[], 
    changeCurrentPage: (p: number) => void, 
    currentPage: number, 
    totalElementCount: number, 
    title: string, 
    pageSize: number,
    smallSize?: boolean,
    setIsFilterClicked?: (boolean: boolean)=> void
}

export const List = ({
    elementsList, 
    changeCurrentPage, 
    currentPage, 
    totalElementCount, 
    title, 
    pageSize,
    smallSize,
    setIsFilterClicked
}: TList) => {
    const [isFullCard, setIsFullCard] = useState(false)
    return (
        <div className={s.container}>
            <div className={`${s.elementList}`}>
                <div className={` pt-2 pb-3 ${smallSize ? s.filterBtn : s.listHeader}`}>
                    <h2 className={s.title}>{title} List</h2>
                    <div className={smallSize && `${flexPlace('between', 'center')} pt-2 pb-3` || ''}>
                        {   
                            smallSize && setIsFilterClicked &&
                            <button 
                                className='btn btn-primary px-5'
                                onClick={()=> setIsFilterClicked(true)}
                            >
                                Filter
                            </button>
                        }
                        
                            <div className="form-check form-switch fs-4">
                                <input 
                                    className="form-check-input border border-primary" 
                                    type="checkbox" 
                                    role="switch" 
                                    id="flexSwitchCheckDefault"
                                    onClick={()=> setIsFullCard(prev => !prev)}
                                />
                            </div>
                        </div>
                </div>
                {
                    elementsList.length < 1 && 
                    <p className='text-dark fs-5'>Sorry we didn't find anything :\</p> 
                } 
                {   
                    isFullCard ? 
                    <div>
                        { 
                            elementsList.map((el) => 
                                <ElementCardFull 
                                    category={title.toLowerCase() as TCategories}
                                    data={el} 
                                    key={el.mal_id}
                                />)
                        }
                    </div>
                    :
                    <div className={`${flexPlace('center', 'start')}  flex-wrap ${s.cardContainer}`}>  
                        { 
                            elementsList.map((el) => 
                            <div className={s.elementCard}>
                                <ElementCard 
                                    category={title.toLowerCase()  as TCategories} 
                                    data={el} 
                                    key={el.mal_id}
                                />
                            </div>
                            ) 
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