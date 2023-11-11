import s from './InlineBtn.module.css'

export const InlineBtn = ({onClick, isWhite}: {onClick: () => void, isWhite: boolean }) => {
    return (
        <div 
            onClick={onClick}  
            className={isWhite ? `${s.mode}`: ''}
        >
           <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M3.5 20.5L3.5 13.5L20.5 13.5V20.5H3.5Z" 
                    stroke={`${isWhite ? 'white' : '#8f8b8b'}`} 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M3.5 10.5L3.5 3.5L20.5 3.5V10.5L3.5 10.5Z" 
                    stroke={`${isWhite ? 'white' : '#8f8b8b'}`} 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}