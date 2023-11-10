import { NavLink } from "react-router-dom";
import s from './SearchBlock.module.css'
import { TAnimeInfo, TCategories, TCharactersInfo, TMangaInfo } from "@/types/mainElementsTypes";

export type TSearchBlock = {
    title: TCategories,
    searchResult: {
        data: TAnimeInfo[] | TMangaInfo[] | TCharactersInfo[],
        pagination:  {
            items: {
                total: number
            }
        }
    }
}

export const SearchBlock = ({title, searchResult}: TSearchBlock) => {
    return (
        <>
            {
                searchResult?.pagination.items?.total > 0 && 
                <div className="mb-3">
                    <div className='d-flex gap-2 pb-2'>
                        <p className='fw-bolder text-secondary m-0 '>{title.toUpperCase()}</p>
                        <p className='text-white bg-secondary px-1 m-0 rounded-3'>
                            {searchResult.pagination.items.total}
                        </p>
                    </div>
                    
                    <div className={`${s.borderRed}`}>
                        { 
                            searchResult.data.map((el, i) => (
                                <div 
                                    className={`py-2 d-flex ${i < 2 && s.greyBorderBottom}`} 
                                    key={el.mal_id}
                                >
                                    <img 
                                        src={el.images.jpg.image_url} 
                                        alt='poster' 
                                        className='px-2 w-25'
                                    />

                                    <div>
                                        <div>
                                            <h5 className={`${s.cardTitle} ${s.redColor}`}>
                                                <NavLink 
                                                    to={`${title}/${el.mal_id}`} 
                                                    className={s.title}
                                                >
                                                    { 'title' in el ? el.title : el.name}
                                                </NavLink>
                                            </h5>
                                            <p className={`${s.cardTitle} `}>
                                                {
                                                    'title_japanese' in el && el.title_japanese ||  
                                                    'name_kanji' in el && el.name_kanji
                                                }
                                            </p>
                                        </div>
                                        {   
                                            'genres' in el &&
                                            <div className={`d-flex align-items-end h-50 ${s.cardTitle}`}>
                                                <span className={'text-decoration-underline'}>Genres</span>:
                                                { 
                                                    el.genres?.length ? 
                                                        el.genres?.map(g => g.name).join(', ')
                                                    :  
                                                        ' unknown' 
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
}
