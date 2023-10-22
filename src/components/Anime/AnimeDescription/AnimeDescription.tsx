import { useParams } from "react-router-dom"
import { useGetAnimeFullByIdQuery } from "../../../redux/services/animeApi"
import Preloader from "../../../Preloader/Preloader"
import s from './AnimeDescription.module.css'
import starSymbol from '../../../imges/starScore.svg'
import { TAnimeInfo } from "@/types/mainElementsTypes"
import { getScoreColor } from "../../../utils.js/getScoreColor"

export const AnimeDescription = () => {
    const params = useParams()

    const {data} = useGetAnimeFullByIdQuery(params.animeId)

    if(!data) {
        return <Preloader/>
    }

    const anime: TAnimeInfo = data.data

    const moreInfo = [
        {title: 'Type', value: anime.type },
        {title: 'Year', value: anime.year },
        {title: 'Source', value: anime.source },
        {title: 'Episodes', value: anime.episodes },
        {title: 'Rating', value: anime.rating },
        {title: 'Genre', value: anime.genres.map((g) => g.name).join(', ')},
        {title: 'Status', value: anime.status },
    ]

    const scoreColor = getScoreColor(anime)

    return (
        <div className={s.container}>
            <div className={s.cardBackground}>
                <div className='p-4 w-100'>
                    <div className="d-flex gap-4 pb-4">
                        <img src={anime.images.jpg.image_url} alt="anime-img" className={s.animePic}/>
                        <div className=""> 
                            <div>
                                <img src={starSymbol} alt='starSymbol' className="pb-2"/>
                                <span className={`fs-4 ${scoreColor}`}>
                                    {(anime.score)?.toFixed(1)}
                                </span>/10
                            </div>
                            <h1 className='fw-bold fs-2' >{anime.title}</h1>
                            <p className={s.borderBottomGrey}>{anime.title_japanese}</p>
                            <div className={s.animeInfo}>
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
                        anime.background &&
                        <div className="py-3">
                            <h4>More info</h4>
                            <p className="text-justify">{anime.background}</p>
                        </div>
                    }
                    {
                        anime.trailer.embed_url ?
                        <iframe 
                            width="80%" 
                            height="550px" 
                            className="px-5 m-auto d-block"
                            src={anime.trailer.embed_url}
                        />
                        : 
                        <p className="pt-4 fs-5">
                            We will add trailer soon ^-^
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}
