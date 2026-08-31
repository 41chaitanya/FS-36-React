export const getAllProdcuts =  async() => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data
}
export const getProductById=async (id)=>{
     const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    return data //object 
}

// {
//     name,
//     brand,
//     image, 3
//     price,
//     rating 

// }
export const createProduct=async (product) => {
    return res=fetch("https://fakestoreapi.com/products",{
        method:"post",
        body:JSON.stringify(product)
    })
}

// {
//     name,
//     brand,
//     image, 3
//     price,
//     rating 

// }

export const updateProductById=async (id,newProductData) => {

    return res=fetch("https://fakestoreapi.com/products/id",{
        method:"patch",
        body:JSON.stringify(newProductData)
    })
    
}


export const deleteProdctById=async (id) => {
    return res=fetch("https://fakestoreapi.com/products/id",{
        method:"delete",
        
    })
}












































