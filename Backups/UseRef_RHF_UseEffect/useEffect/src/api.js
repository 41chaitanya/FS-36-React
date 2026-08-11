const getProduct=async () => {
        console.log("calling")
            const res=await fetch("https://fakestoreapi.com/products")
            const data=await res.json()
            console.log(data)
            return data
        }
        export default getProduct