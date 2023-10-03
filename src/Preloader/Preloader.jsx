import preloader from './spinner.svg'

const Preloader = () => {
  return(
    <div style={{margin: '38vh auto', textAlign: 'center'}}>
        <img src={preloader} style={{width: '20vh'}}/>
    </div>
  )
}

export default Preloader;