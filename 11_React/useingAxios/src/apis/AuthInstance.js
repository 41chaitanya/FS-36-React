import axios from 'axios'

const API_AUTH=axios.create({
    baseURL:"http://localhost:3000/auht/api",
    header:{},
    maxContentLength,
    cancelToken,

})
export default API