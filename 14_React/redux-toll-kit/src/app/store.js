// type
// action
// initialState`
// reducer
// store
// subscribe
// dispatch


import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import {logger} from 'redux-logger'
import iceCreamReducer from '../features/iceCream/iceCreamSlice'

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        // products:.
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(logger)
    }
})
export default store

