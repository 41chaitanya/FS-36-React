import {createStore,applyMiddleware} from 'redux'
import productsReducer from './products/productReducer'
import {logger} from 'redux-logger'
import {thunk} from 'redux-thunk'



const store=createStore(productsReducer,applyMiddleware(logger,thunk))
export default store