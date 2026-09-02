import axios from 'axios'
const API=axios.create({
    baseURL:"https://fakestoreapi.com"
})


export const getAllProducts=async () => {
    const {data}=await API.get("/products")
    return data
}