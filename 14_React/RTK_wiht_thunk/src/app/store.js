import {configureStore} from '@reduxjs/toolkit'
import {logger} from 'redux-logger'
import reducer from '../feature/product/productSlice'

const store=configureStore({
    reducer:{
        p:reducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)

})
export default store