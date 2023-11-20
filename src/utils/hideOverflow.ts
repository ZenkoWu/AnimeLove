// remove scrollbar when modal is open

export const hideOverflow = (isHide: boolean) => {
    const body = document.querySelector('body')!

    if(isHide) {
        body.style.height = '100vh'
        body.style.overflow = 'hidden'
    } else {
        body.style.height = '100%'
        body.style.overflow = 'visible'
    }
}