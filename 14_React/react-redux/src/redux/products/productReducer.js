import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./productType"

const productIntialState={
    loader:false,
    products:[],
    error:''
}
const productsReducer=(state=productIntialState,action)=>{

    switch(action.type){
        case FETCH_PRODUCTS_REQUEST:return{
            ...state,
            loader:true
        }
        case FETCH_PRODUCTS_SUCCESS:return{
            ...state,
            loader:false,
            products:action.payload
        }
        case FETCH_PRODUCTS_FAILURE:return{
            ...state,
            loader:false,
            products:action.payload

        }
        default :return state
    }

}
export default productsReducer