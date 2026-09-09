const {createStore,combineReducers,applyMiddleware} =require("redux")
const {logger} =require("redux-logger")



// state
const initialCakeState={
    noOfCakes:10,

}
const initialIcereamState={

    noIceCream:20,
}




// action ---> type 
                // action also known as (type)
                const BUY_CAKE="BUY_CAKE"
                const BUY_ICECREAM="BUY_ICECREAM"
                const REFILL="REFILL"
                
                // Action creator
                const buyCake=()=>{
                    return {
                        type:BUY_CAKE
                    }
                }
                const buyIceCream=()=>{
                    return {
                        type:BUY_ICECREAM
                    }
                }

                const reFill=(cakeCount)=>{
                    return {
                        type:REFILL,
                        payload:cakeCount
                    }
                }

// reducer

const cakeReducer =(state=initialCakeState,action)=>{
    switch(action.type){


        case BUY_CAKE:return {
            ...state,
            noOfCakes:state.noOfCakes-1
        }
        case REFILL:return {
            ...state,
            noOfCakes:state.noOfCakes+action.payload
        }
      
        default :return state
        
    }

}

const IceCreamReducer =(state=initialIcereamState,action)=>{
    switch(action.type){

        case BUY_ICECREAM:return {
            ...state,
            noIceCream:state.noIceCream-1
        }
        default :return state
        
    }

}
// store
const rootReducer=combineReducers({
    cake:cakeReducer,
    IceCream:IceCreamReducer
})

const store =createStore(rootReducer ,applyMiddleware(logger))

//getState(). --> value of instance. return. krta  hai 

console.log("initail state",store.getState())

// subscribe





const unSub=store.subscribe(()=>{})

// dispatch

store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(reFill(56))
// unscbscribe

// function
unSub()




