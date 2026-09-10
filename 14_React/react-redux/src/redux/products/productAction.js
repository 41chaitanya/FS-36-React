import axios from "axios"
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./productType"
import { fetchAPIOfProduct } from "../../api/apiProducts"

const fetchProductsRequest=()=>{
    return {
        type:FETCH_PRODUCTS_REQUEST
    }
}
const fetchProductsSuccess=(products)=>{
    return {
        type:FETCH_PRODUCTS_SUCCESS,
        payload:products
    }
}
const fetchProductsFailure=(error)=>{
    return {
        type:FETCH_PRODUCTS_FAILURE,
        payload:error
    }
}


export const fetchProduct=()=>{
    return async (dispatch) => {

    dispatch(fetchProductsRequest())
    try {

        const data=await fetchAPIOfProduct()
      
        dispatch(fetchProductsSuccess(data))
    } catch (error) {
        dispatch(fetchProductsFailure(error.message))
        
    }
        
    }
}