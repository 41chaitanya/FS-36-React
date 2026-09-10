import axios from 'axios'
const API=axios.create({
    baseURL:"https://fakestoreapi.com"
})
export const fetchAPIOfProduct=async () => {
    const {data}=await API.get("/products")
    return data
    
}