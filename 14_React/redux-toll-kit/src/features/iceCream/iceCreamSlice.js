import {createSlice} from '@reduxjs/toolkit'
const initialIceCreamState={
    noOfIceCreams:10
}
const incCreamSlice=createSlice({
    name:'iceCream',
    initialState:initialIceCreamState,
    reducers:{
        buyIceCream:(state)=>{
            state.noOfIceCreams--
        },
        refillIceCream:(state,action)=>{
            state.noOfIceCreams+=action.payload
        }   
    }

})
export const {buyIceCream,refillIceCream}=incCreamSlice.actions
export default incCreamSlice.reducer
