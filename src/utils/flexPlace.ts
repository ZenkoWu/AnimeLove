//returns css styles to create display: flex
export const flexPlace = (
    horizontal: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' = 'center',
    vertical: 'start' | 'end' | 'center' | 'baseline' | 'stretch' = 'center',
): string => ` d-flex justify-content-${horizontal} align-items-${vertical} `;