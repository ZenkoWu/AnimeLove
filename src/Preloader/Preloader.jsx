import preloader from './spinner.svg'
import s from './Preloader.module.css'

const Preloader = () => {
  return(
    <div className={`${s.container} text-center`}>
        <img src={preloader} alt='preloader' className={s.preloader}/>
    </div>
  )
}

export default Preloader;