import axios from 'axios'

const API=axios.create({
    baseURL:"http://localhost:3000/api"
})


//request interceptor
API.interceptors.request.use((config)=>{
    // login
    const token=localStorage.getItem("token")
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    


    console.log(config)
    return config
},(error)=>{
    return Promise.reject(error)
})






export default API
