import { useEffect } from "react";

export const getWindowSizes = () => ({
    width: window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth,
    height: window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight,
});

export const useWindowSizes = (onSizesChange: ()=> void) => {
    const {width, height} = getWindowSizes();

    useEffect(() => {
        window.addEventListener('resize', onSizesChange);
        return () => {
            window.removeEventListener('resize', onSizesChange);
        }
    }, [width, height, onSizesChange])

    return {width, height}
}