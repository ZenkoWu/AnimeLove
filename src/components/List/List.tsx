import Paginator from '../Paginator/Paginator';
import {ElementCardFull} from '../ElementCardFull/ElementCardFull';
import s from './List.module.css'
import { useState } from 'react';
import {ElementCard} from '../ElementCard/ElementCard';
import { TMangaInfo,TAnimeInfo } from '../../types/mainElementsTypes';

type TList = {
    elementsList: TAnimeInfo[] | TMangaInfo[], 
    changeCurrentPage: (p: number) => void, 
    currentPage: number, 
    totalElementCount: number, 
    title: 'Anime' | 'Manga', 
    pageSize: number 
}

export const List = ({
    elementsList, 
    changeCurrentPage, 
    currentPage, 
    totalElementCount, 
    title, 
    pageSize
}: TList) => {
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
                    </div>
                </div>
                {/* {elementList.length < 1 && //todo
                    <p className='text-dark'>Sorry we didn't find anything :\</p> } */} 
                {   
                    isFullCard ? 
                    <div>
                        { 
                            elementsList.map((el) => 
                                <ElementCardFull 
                                    category={title.toLowerCase() as 'manga' | 'anime'}  //todo fix this type
                                    data={el} 
                                    key={el.mal_id}
                                />)
                        }
                    </div>
                    :
                    <div className='d-flex justify-between flex-wrap'>  
                        { 
                            elementsList.map((el) => 
                                <ElementCard 
                                    category={title.toLowerCase() as 'manga' | 'anime'} 
                                    data={el} 
                                    key={el.mal_id}
                                />
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