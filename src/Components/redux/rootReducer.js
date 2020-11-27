import {combineReducers} from 'redux'
import userReducer from './userReducer'
import cartReducer from '../cart/cart.reducer'

export default combineReducers ({
    user: userReducer,
    cart: cartReducer
}) 