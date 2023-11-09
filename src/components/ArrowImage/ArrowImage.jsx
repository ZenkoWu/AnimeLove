import arrowDown from '../../imges/arrowDown.svg'
import arrowUp from '../../imges/arrowUp.svg'
// r - файл jsx феееее
const ArrowImage = ({opened}) => {
    return (
        <div>
            <img src={opened ?  arrowUp :  arrowDown  } alt="arrow" />
        </div>
        
    )
}

export default ArrowImage;