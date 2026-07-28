import React, { use, useState } from "react";


// const UseState = () => {

//     const [a,setA]=useState()

//   const clicked = () => {
//    setA(a+1)
//     console.log(a)
//   };

//   return (
//     <div>
//         {a}
//       <button onClick={clicked}>click</button>
//     </div>
//   );
// };

// export default UseState;






// const UseState = () => {
//     //number
//     const [count,setCout]=useState(0)

//     //string
//     const [name,setName]=useState("Chaitanya")
//     //boolean
//     const [isAdmin]=useState(false)
//     // object




//     const [user,setUser]=useState({
//         thumbnailink:"",
//         vdo:"",
//         title:"",


//     })

//     //array
//     const [notes,setNotes]=useState(["http","http"])
    

//     //undefined

//     const [person,setPerson]=useState(undefined)
//     // null

//     const [everyOne,setEveryOne]=useState(null)



//     //lazy initilization

//     const [data,setData]=useState(()=>{
//            const exp=[1,2,3,4,5,6,7,8,9]
//            const value=exp.reduce((i,j)=>{
//                 return i+j
//            })


//         return value
//     })
// setCount(prv)
//   return (
//     <>
//     {count}
//     {user.title}
//     {notes[0]}
//     {data}

    
    
//     </>
//   )
// }

// export default UseState




// functionl and closure





// const UseState = () => {

//   const [a,setA]=useState(0)
//   return (
//     <>
//       <div>{a}</div>
//       <button onClick={()=>{
//         // setA(a+1)
//         setA(p=>p+1)
//       }}>inc</button>
    
//     </>
//   )
// }

// export default UseState




// exercise




// const UseState = () => {

//   const [a,setA]=useState(0)
//   console.log(a)
//   return (
//     <>
//       <div>{a}</div>
//       <button onClick={()=>{
//         // setA(a+1)
//         // setA(a+1)
//         // setA(a+1)
//         // setA(a+1)
//         // setA(a+1)


//         // setA(p=>p+1)
//         // setA(p=>p+1)
//         // setA(p=>p+1)
//         // setA(p=>p+1)
//         // setA(p=>p+1)
//         // setA(p=>p+1)
//         // setA(p=>p+1)


//         // for(let i=0;i<=6;i++){
//         //   console.log(i)
//         //   // setA(a+1)
//         //   setA(p=>p+1)
//         // }
//         setA(1)
//         setA(2)
//         setA(3)
       
        
//       }}>inc</button>
    
//     </>
//   )
// }

// export default UseState




// const UseState = () => {

//   const [user,setUser]=useState({
//     name:"atul",
//     age:55,
//     company:"google"
//   })
//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <h1>{user.age}</h1>
//       <h1>{user.company}</h1>
//       <button onClick={()=>{
//         setUser({...user,name:"vinod"})
//       }}>change name</button>
//       <button onClick={()=>{
//         setUser({...user,age:45})
//       }}>change age</button>

//     </div>
//   )
// }

// export default UseState


// CRUD
// create





// reade
// update
// delete



const UseState = () => {

  const data=["apple","mango","chiiku","banana"]
const [fruits,setFurits]=useState(data)
  return (
    <>
    {
      data.map((d)=>(<p>{d}</p>))
    }

    <button onClick={()=>{
      let newArr=data.filter((d)=>{
       if(d!="banana"){
        return d
       }
       setFurits(newArr)
      })
    }}>delete</button>
    <button onClick={()=>{
      data.map(()=>{
        if(d=="apple"){
            return "pineapple"
        }
      })
    }}>update</button>
    
    </>
  )
}

export default UseState





