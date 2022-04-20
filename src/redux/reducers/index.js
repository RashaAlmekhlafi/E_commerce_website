import {combineReducers} from 'redux'
import EcommerceReducer from './EcommerceReducer'

const reducers= combineReducers({
    ecommerce:EcommerceReducer,
})
export default reducers