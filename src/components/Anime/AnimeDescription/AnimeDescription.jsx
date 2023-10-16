import { useParams } from "react-router-dom"
import { useGetAnimeFullByIdQuery } from "../../../redux/services/animeApi"
import Preloader from "../../../Preloader/Preloader"
import s from './AnimeDescription.module.css'

const AnimeDescription = () => {
    const params = useParams()

    const {data} = useGetAnimeFullByIdQuery(params.animeId)
    console.log(data)
    
    if(!data) {
        return <Preloader/>
    }
    const anime = data.data

    const scoreColor = Math.round(anime.score) > 7 ? 'orange' : Math.round(anime.score) < 5 ? 'red' : null
    return (
        <div className={s.container}>
            <div className={s.cardBackground}>
                <div className='p-4 w-100'>
                    <div className="d-flex gap-4 pb-4">
                        <img src={anime.images.jpg.image_url} alt="anime-img"  className={s.animePic}/>
                        <div className=""> 
                            <p className="m-0">
                                <span className='fs-2' style={{color:'orange'}}>&#9733;</span>
                                <span className='fs-4' style={{backgroundColor: scoreColor}}>{(anime.score)?.toFixed(1)}</span>/10
                                {/* <span> {anime.scored_by}</span>
                                <span> scores</span> */}
                            </p>
                            <h1 className='fw-bold fs-2' >{anime.title}</h1>
                            <p style={{borderBottom: '1px solid #ced4da'}} className="">{anime.title_japanese}</p>
                            <div className={s.animeInfo}>
                                <dl className="row">
                                    <dt className="col-6 col-sm-4 fw-normal text-secondary">Type</dt>
                                    <dd className="col-6 col-sm-8 mb-1">{anime.type}</dd>
                                    <dt className="col-6 col-sm-4 fw-normal text-secondary">Year</dt>
                                    <dd className="col-6 col-sm-8 mb-1">{anime.year}</dd>
                                    <dt className="col-6 col-sm-4 fw-normal text-secondary">Source</dt>
                                    <dd className="col-6 col-sm-8 mb-1">{anime.source}</dd>
                                    <dt className="col-6 col-sm-4 fw-normal text-secondary">Episodes</dt>
                                    <dd className="col-6 col-sm-8 mb-1 text-danger">{anime.episodes}</dd>
                                    <dt className="col-6 col-sm-4 fw-normal text-secondary">Duration</dt>
                                    <dd className="col-6 col-sm-8 mb-1">~{anime.duration}</dd>
                                    <dt className="col-6 col-sm-4 fw-normal text-secondary">Rating</dt>
                                    <dd className="col-6 col-sm-8 mb-1">{anime.rating}</dd>
                                    <dt className="col-6 col-sm-4 fw-normal text-secondary">Genre</dt>
                                    <dd className="col-6 col-sm-8 mb-1">{anime.genres.map(g => g.name).join(', ')}</dd>
                                    <dt className="col-6 col-sm-4 fw-normal text-secondary">Status</dt>
                                    <dd className="col-6 col-sm-8 mb-1">{anime.status}</dd>
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
                        <iframe width="80%" height="550px" className="px-5 m-auto d-block"
                            src={anime.trailer.embed_url}>
                        </iframe>
                        
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

export default AnimeDescription