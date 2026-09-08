import React, { useReducer } from 'react'

const App = () => {


 


  const  reducerFunction=(state,action)=>{

    switch(action.type){
      case "inc" :return state+1
      case "dec" :return state-1
      case "double" :return state*2
      case "inc+4" :return state+4

    }

    // inc ---> state+1
    //dec --> state-1
    // double --state*2
    // inc+4 ---> state+4



  }




  const [state,dispatch]=useReducer(reducerFunction,0)



console.log(state)


  return (



    <div>
    
        
      <h1>{state}</h1>

      <button onClick={()=>dispatch({type:"inc"})}>inc</button>
      <button onClick={()=>{}}>dec</button>
      <button onClick={()=>{}}>double</button>
      <button onClick={()=>{}}>inc+4</button>
      
    </div>
  )
}

export default App














// import React, { useState } from 'react'



// // reducer
// const App = () => {

//   const [count,setCount]=useState(0)
//   return (
//     <div>
      

//       <button onClick={()=>{
//         setCount(count+1)
//       }}>inc</button>
//       <button onClick={()=>{
//         setCount(count-1)
//       }}>dec</button>
//       <button onClick={()=>{
//         setCount(count*2)
//       }}>double</button>
//       <button onClick={()=>{
//         setCount(count+4)
//       }}>inc by 4</button>
      
//     </div>
//   )
// }

// export default App
