import arrowDown from '../../imges/arrowDown.svg'
import arrowUp from '../../imges/arrowUp.svg'

export const ArrowImage = ({opened}: {opened: boolean}) => (
    <img src={opened ?  arrowUp :  arrowDown  } alt="arrow" /> 
)
