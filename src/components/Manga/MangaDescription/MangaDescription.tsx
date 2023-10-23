import { useParams } from "react-router-dom"
import { useGetMangaFullByIdQuery } from "../../../redux/services/mangaApi"
import Preloader from "../../Preloader/Preloader"
import s from './MangaDescription.module.css'
import starSymbol from '../../../imges/starScore.svg'
import { getScoreColor } from "../../../utils/getScoreColor"
import { TMangaInfo } from "@/types/mainElementsTypes"

export const MangaDescription = () => {
    const params = useParams()

    const {data} = useGetMangaFullByIdQuery(params.mangaId)
    
    if(!data) {
        return <Preloader/>
    } 
    const manga: TMangaInfo = data.data

    const scoreColor = manga.score && getScoreColor(manga.score)
    
    return (
        <div className={s.container}>
            <div className={s.cardBackground}>
                <div className='p-4 w-100'>
                    <div className="d-flex gap-4 pb-4">
                        <img src={manga.images.jpg.image_url} alt="manga-img"  className={s.mangaPic}/>
                        <div className=""> 
                            <div>
                                <img src={starSymbol} alt='starSymbol' className="pb-2"/>
                                <span className={`fs-4 ${scoreColor}`}>
                                    {(manga.score)?.toFixed(1)}
                                </span>/10
                            </div>
                            <h1 className='fw-bold fs-2' >{manga.title}</h1>
                            <p style={{borderBottom: '1px solid #ced4da'}} className="">{manga.title_japanese}</p>
                            <div className={s.mangaInfo}>
                                <dl className="row">
                                    <dt className="col-6 col-sm-4 fw-normal text-secondary">Chapters</dt>
                                    <dd className="col-6 col-sm-8 mb-1 text-danger">{manga.chapters ?? 'unknown'}</dd>
                                    <dt className="col-6 col-sm-4 fw-normal text-secondary">Genre</dt>
                                    <dd className="col-6 col-sm-8 mb-1">{manga.genres?.map(g => g.name).join(', ')}</dd>
                                    <dt className="col-6 col-sm-4 fw-normal text-secondary">Status</dt>
                                    <dd className="col-6 col-sm-8 mb-1">{manga.status}</dd>
                                </dl>
                            </div>
                        </div>

                    </div>
                    { 
                        manga.background &&
                        <div className="py-3">
                            <h4>More info</h4>
                            <p className="text-justify">{manga.background}</p>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}
