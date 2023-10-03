export const logger = (store) => (next) => (action) => {
    // console.log(action)
    // console.log(store.getState())
    next(action)
}