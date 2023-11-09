import { Provider } from "react-redux"
import {store} from './store'
// r - поч не тсх ?
export const StoreProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}