import {useParams,useNavigate} from 'react-router'
const Category = () => {
    const {category}=useParams()
    console.log(category)
    const navigate=useNavigate()
  return (
    <div>{category}
    
        <button onClick={()=>{
            navigate("/products")
        }}> go back</button>
    </div>
  )
}

export default Category