import {createSlice} from '@reduxjs/toolkit'

const initalCakeState={
    noOfCake:10,
    pound:2,
}

const cakeSlice=createSlice({
    name:"cake",
    initialState:initalCakeState,
    reducers:{
        buyCake:(state)=>{
        
            state.noOfCake--

        },
        refillCakes:(state,action)=>{
            state.noOfCake+=action.payload

        }
    }

}) 


export const  {buyCake,refillCakes}=cakeSlice.actions
export default cakeSlice.reducer