import arr from '../../imges/arrowDown.svg'

const ArrowImage = ({opened, color, width}) => {
    const blackArrows = ['/icons/arrowUp.svg', '/icons/arrowDown.svg']
    const greyArrows = ['/icons/greyArrowUp.svg', '/icons/greyArrowDown.svg']

    const arrows = color === 'grey' ? greyArrows : blackArrows
    return (
        // <Image 
        //     className='pointer'
        //     src={opened ? arrows[0] : arrows[1]}
        //     alt="arrow"
        //     width={width ? width : 32}
        //     height={32}
        //     priority
        <div>
            <img src={arr} alt="" />
        </div>
        
    )
}

export default ArrowImage;