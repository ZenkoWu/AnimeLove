import s from './GridBtn.module.css'

export const GridBtn = ({onClick, isWhite}: {onClick: () => void, isWhite: boolean }) => {
    return (
        <div 
            onClick={onClick}  
            className={isWhite ? `${s.mode}`: ''}
        >
            <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title/>
                    <g id="Complete">
                        <g id="grid">
                            <g>
                            <rect fill="none" height="7" stroke={`${isWhite ? 'white' : '#8f8b8b'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="7" x="14.5" y="2.5"/>
                            <rect fill="none" height="7" stroke={`${isWhite ? 'white' : '#8f8b8b'}`} strokeLinejoin="round" strokeWidth="2" width="7" x="14.5" y="14.5"/>
                            <rect fill="none" height="7" stroke={`${isWhite ? 'white' : '#8f8b8b'}`} strokeLinejoin="round" strokeWidth="2" width="7" x="2.5" y="2.5"/>
                            <rect fill="none" height="7" stroke={`${isWhite ? 'white' : '#8f8b8b'}`} strokeLinejoin="round" strokeWidth="2" width="7" x="2.5" y="14.5"/>
                            </g>
                        </g>
                    </g>
            </svg>
        </div>
    )
}