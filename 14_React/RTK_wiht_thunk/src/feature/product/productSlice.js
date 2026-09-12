import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
const initialProductState={
    loading:false,
    products:[],
    error:""
}


export const fetchProduct=createAsyncThunk("product",async()=>{
    const res=await fetch("https://fakestoreapi.cm/products")
    const data=await res.json()
    return data
})
const productSlice=createSlice({
    name:"products",
    initialState:initialProductState,
    extraReducers:(builder)=>{
        builder
        //pending
        .addCase(
            fetchProduct.pending,
            (state,action)=>{
                state.loading=true
            }
        )
        //fullfilled
        .addCase(
            fetchProduct.fulfilled,
            (state,action)=>{
                state.loading=false,
                state.products=action.payload

            }
        )
        //rejected
        .addCase(
            fetchProduct.rejected,
            (state,action)=>{
                state.loading=false,
                state.error=action.payload.error.message

            }
        )

    }
})

export default productSlice.reducer