import { useDispatch, useSelector } from 'react-redux';
import { animeActions } from '../../redux/features/animeList';
import { useCallback, useReducer } from 'react';
import { api } from "../../redux/services/api/api";
import Preloader from "../Preloader/Preloader";
import {List} from '../List/List';
import { Filter, statusAC, ratingAC, orderByAC, typeChangeAC, reducer} from '../Filter/Filter';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { TState } from '../../redux/store';
import { ElementCard } from '../List/ElementCard/ElementCard';


export const Characters = () => {

    const {currentPage, pageSize: pageLimit, totalAnimeCount} = useSelector((state: TState )=> state.animeList)
    const dispatch = useDispatch()

    const {data: anime} = api.characters.getList({
        currentPage, 
        pageLimit
    })
    
    console.log(anime)
    const changeCurrentPage = useCallback((currentPage: number) => {
        dispatch(animeActions.changeCurrentPage(currentPage))
    }, [currentPage])

    if(!anime) {
        return <Preloader/>
    }
    const totalCount = anime.pagination.items.total 
    dispatch(animeActions.changeTotalAnimeCount(totalCount))
    
    return (
        // <div style={{padding: '50px 150px'}}>
        //     <div style={{backgroundColor: 'white', padding:'20px '}} >
        //         <h2 className='py-2 fw-bold' style={{fontSize: '28px'}}>Characters List</h2>
        //     <div className='d-flex justify-between flex-wrap'>  
        //         { 
        //             anime.data.map((el: any) => 
        //                 <ElementCard 
        //                     category={'manga'} 
        //                     data={el} 
        //                     key={el.mal_id}
        //                 />
        //             ) 
        //         }
        //     </div> 

        //     </div>
        // </div>
        <div style={{padding: '50px 150px'}}>
            {/* <div style={{ padding:'20px '}} > */}
            <List
                    title='Characters'
                    elementsList={anime.data} 
                    changeCurrentPage={changeCurrentPage} 
                    currentPage={currentPage}
                    totalElementCount={totalAnimeCount}
                    pageSize={pageLimit}
                />
            {/* </div> */}
        </div>
    )
}