import { useParams } from "react-router-dom"
import Preloader from "../Preloader/Preloader"
import s from './ElementDescription.module.css'
import starSymbol from '../../imges/starScore.svg'
import { TAnimeInfo, TCategories, TMangaInfo } from "../../types/mainElementsTypes"
import { getScoreColor } from "../../utils/getScoreColor"
import { api } from "../../redux/services/api/api"
import FavoriteBtn from "../../components/Favorites/FavoriteBtn/FavoriteBtn"
import { flexPlace } from "../../utils/flexPlace"
import {Carousel} from "../../components/Carousel/Carousel"
import { API_ROUTES } from "../../redux/services/apiRoutes/apiRoutes"
import { ErrorPage } from "../../components/ErrorPage/ErrorPage"

const recommendsAmount = 6

export const ElementDescription = ({route}: {route: TCategories}) => {
    const params = useParams()
    
    if(!params.id) {
        return <ErrorPage/>;
    }

    const {data} = api.getById({route, id: params.id})
    const {data: rec} = api.getRecommendations({route, id: params.id})

    if(!data || !rec) {
        return <Preloader/>
    }
    
    const recommends = rec.data.map((el: any) => el.entry)
    const info = data.data //todo TAnimeInfo | TMangaInfo 

    const moreInfo = route === API_ROUTES.ANIME ?
        [
            {title: 'Type', value: info.type },
            {title: 'Year', value: info.year },
            {title: 'Source', value: info.source },
            {title: 'Episodes', value: info.episodes },
            {title: 'Rating', value: info.rating },
            {title: 'Genre', value: info.genres?.map((g: any) => g.name).join(', ')},
            {title: 'Status', value: info.status },
        ] 
    :
        [
            {title: 'Chapters', value: info.chapters  ?? 'unknown'},
            {title: 'Genre', value: info.genres?.map((g: any) => g.name).join(', ')},
            {title: 'Status', value: info.status },
        ]

    const scoreColor = info.score && getScoreColor(info.score)

    return (
        <div className={s.container}>
            <div className={s.cardBackground}>
                <div className='p-4 w-100'>
                    <div className="d-flex gap-4 pb-4">
                        <img src={info.images.jpg.image_url} alt="info-img" className={s.infoPic}/>
                        <div className="w-100"> 
                            <div className={`${flexPlace('between', 'center')}`}>
                                <div className=" d-flex">
                                    <img src={starSymbol} alt='starSymbol'/>
                                    <div>
                                        <span className={`fs-4 ${scoreColor}`}>
                                            {(info.score)?.toFixed(1)}
                                        </span>/10
                                    </div>
                                </div>
                               
                                <FavoriteBtn 
                                    category={route}
                                    info={{
                                        mal_id: info.mal_id,
                                        images: info.images,
                                        title: info.title
                                    }}
                                />
                            </div>
                            <h1 className='fw-bold fs-2' >{info.title}</h1>
                            <p className={s.borderBottomGrey}>{info.title_japanese}</p>
                            <div className={s.infoInfo}>
                                <dl className="row">
                                    {
                                        moreInfo.map(el => 
                                            <>
                                                <dt className="col-6 col-sm-4 fw-normal text-secondary">
                                                    {el.title}
                                                </dt>
                                                <dd className="col-6 col-sm-8 mb-1">{el.value}</dd>
                                            </>
                                        )
                                    }
                                </dl>
                            </div>
                        </div>

                    </div>
                    { 
                        info.background &&
                        <div className="py-3">
                            <h4>More info</h4>
                            <p className="text-justify">{info.background}</p>
                        </div>
                    }
                    {
                        route === API_ROUTES.ANIME &&
                        (
                            info.trailer?.embed_url ?
                            <iframe 
                                width="80%" 
                                height="550px" 
                                className="px-5 m-auto d-block"
                                src={info.trailer.embed_url}
                            />
                            : 
                            <p className="pt-4 fs-5">
                                We will add trailer soon ^-^
                            </p>
                        )
                        
                    }
                    {    
                        recommends.length > 0 &&
                        <div className="pt-4">
                            <Carousel 
                                carouselItems={recommends} 
                                to={`/${route}/`} 
                                title={'Recommendations'}
                                itemsCount={recommendsAmount}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
