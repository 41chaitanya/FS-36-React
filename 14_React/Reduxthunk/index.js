// action. type
const {createStore,applyMiddleware}=require("redux")
const {logger}=require("redux-logger")
const {thunk}=require("redux-thunk")

// 

const  FETCH_PRODUCT_REQUEST="FETCH_PRODUCT_REQUEST"
const  FETCH_PRODUCT_SUCCESS="FETCH_PRODUCT_SUCCESS"
const  FETCH_PRODUCT_FAILURE="FETCH_PRODUCT_FAILURE"


//user data


// const  FETCH_USER_REQUEST="FETCH_USER_REQUEST"
// const  FETCH_USER_SUCCESS="FETCH_USER_SUCCESS"
// const  FETCH_USER_FAILURE="FETCH_USER_FAILURE"





// action creator. 
    const fetchProductRequest=()=>{
        return {
            type:FETCH_PRODUCT_REQUEST
        }
    }
    const fetchProductSuccess=(products)=>{
        return {
            type:FETCH_PRODUCT_SUCCESS,
            payload:products
        }
    }
    const fetchProductFailure=(error)=>{
        return {
            type:FETCH_PRODUCT_FAILURE,
            payload:error
        }
    }

async. action func
    const fetchProduct=()=>{
        return async (dispath) => {
            dispath(fetchProductRequest())
            try {
                const res=await fetch("https://fakestoreai.com/products")
                const data=await res.json()
                dispath(fetchProductSuccess(data))
            } catch (error) {
                dispath(fetchProductFailure(error.message))
                
            }
            
        }
    }






// state`
const initilProductState={
    loader:false,
    products:[],
    error:''
}

// reducer

// const initilProductState={
//     loader:false,
//     products:[],
//     error:''
// }
const productReducer=(state=initilProductState,action)=>{
    switch(action.type){
        case FETCH_PRODUCT_REQUEST:return {
            ...state,
            loader:true
        }
        case FETCH_PRODUCT_SUCCESS:return {
            ...state,
            loader:false,
            products:action.payload
        }
        case FETCH_PRODUCT_FAILURE:return {
            ...state,
            loader:false,
            error:action.payload
        }
        default:  return state
    }
}
// store. 
const store=createStore(productReducer,applyMiddleware(logger,thunk))
// subscribe 
const unscubsrie=store.subscribe(()=>{})
// dispath
store.dispatch(fetchProduct())

// unscubsrie