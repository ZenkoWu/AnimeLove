// remove scrollbar when modal is open

export const hideOverflow = (condition: boolean) => {
    const body = document.querySelector('body')!

    if(condition) {
        body.style.height = '100vh'
        body.style.overflow = 'hidden'
    } else {
        body.style.height = '100%'
        body.style.overflow = 'visible'
    }
}