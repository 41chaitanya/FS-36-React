import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { buyCake, refillCakes } from './features/cake/cakeSlice'
import { buyIceCream, refillIceCream } from './features/iceCream/iceCreamSlice'

const App = () => {

  const dispatch=useDispatch()
  const {cake,iceCream}=useSelector(state=>state)

  const handleBuyCake=()=>{
    dispatch(buyCake())

  }
  const handleRefillCake=()=>{
    dispatch(refillCakes(10))

  }
  const handleBuyIceCream=()=>{
    dispatch(buyIceCream())

  }
  const handleRefillIceCream=()=>{
    dispatch(refillIceCream(10))

  }
  return (
   <>
   <h1>{cake.noOfCake}</h1>
   <h1>{iceCream.noOfIceCreams}</h1>


   
    <button onClick={handleBuyCake}>buy cake</button>
    <button onClick={handleRefillCake}> refil  10 cakes</button>
   
    <button onClick={handleBuyIceCream}>buy ice Cream</button>
    <button onClick={handleRefillIceCream}> refil 10 ice creams</button>
   
   </>
  )
}

export default App





// src
    // -- app ----> store
    // features