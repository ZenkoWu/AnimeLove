import arrowDown from '../../imges/arrowDown.svg'
import arrowUp from '../../imges/arrowUp.svg'

const ArrowImage = ({opened}: {opened: boolean}) => {
    return (
        <div>
            <img src={opened ?  arrowUp :  arrowDown  } alt="arrow" />
        </div>
        
    )
}

export default ArrowImage;