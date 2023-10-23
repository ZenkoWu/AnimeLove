
// The function that “defers” calling another function until a certain amount of time has passed since 
//the last call.

export const debounce = ( callback: (e: React.SyntheticEvent)=> void, delay: number )=> {
    let timeout: number;
    return (e: React.SyntheticEvent) => {
        clearTimeout( timeout );
        timeout = window.setTimeout(() => callback(e), delay );
    }
}