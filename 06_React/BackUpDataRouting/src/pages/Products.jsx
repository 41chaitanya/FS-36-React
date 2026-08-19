import {NavLink, useLoaderData} from 'react-router'

const Products = () => {
    const allData=useLoaderData()
   
  return (
    <div>


        products
        <NavLink to={"/products/beauty"}>Beauty</NavLink>

        {
            allData.map((d)=>{
                return <div key={d.id}>
                    {d.title}
                </div>
            })
        }
    </div>
  )
}

export default Products