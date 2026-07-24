import {useForm} from 'react-hook-form'
const App = () => {


  const {register,getValues} =useForm()



  const getName=()=>{
    console.log(getValues("name"))
    console.log(getValues("email"))
    console.log(getValues("tech"))
    console.log(getValues("asia"))
    console.log(getValues("chacha"))
  }
  return (
    <>
    
    
      {/* <input type="text"  value={name}/> */}
    <input placeholder='chacha' type="text" {...register("chacha")}/>




      <input type="text" {...register("name")} />
      <input type="email" {...register("email")} />
      Teach
      <input type="radio" id="html" name="fav_language" value="HTML" {...register("tech")}/>
      <input type="radio" id="css" name="fav_language" value="CSS" {...register("tech")}/>



        <select name="" id="" {...register("asia")}>

          <option value="i">IND</option>
          <option value="p">PAK</option>
          <option value="b">BNG</option>
          <option value="s">SRL</option>
          <option value="a">AFG</option>
        </select>
      <button onClick={getName}>name</button>
    </>
  )
}

export default App