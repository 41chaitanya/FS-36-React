import React, { useState } from 'react'
import { createUsers } from '../apis/usersApi'

const Create = () => {

    const [done,setDone]=useState(false)


    // {


    //     name ,
    //     email,
    //     password,
    //     gender,
    //     profileImageUrl
    // }
    const userData={

        name :"nirmla sita raman",
        email :"nSitaramanr@gmail.com",
        password :"1234567",
        gender:"female",
        profileImageUrl:"https://imgs.search.brave.com/iaPjkwbFwyL9ZQc4Hpjy-ZQS8ak1AzrrqgvvCm_7xGg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI2L0Ft/XzExLl9BcHJpbF8y/MDI1X2VtcGZpbmdf/QXUlQzMlOUZlbm1p/bmlzdGVyaW5fQmVh/dGVfTWVpbmwtUmVp/c2luZ2VyX2RpZV9p/bmRpc2NoZV9GaW5h/bnptaW5pc3Rlcmlu/X05pcm1hbGFfU2l0/aGFyYW1hbl9pbl9X/aWVuXyUyODU0NDQ1/Mzk3MDI1JTI5XyUy/OGNyb3BwZWQlMjku/anBnLzI1MHB4LUFt/XzExLl9BcHJpbF8y/MDI1X2VtcGZpbmdf/QXUlQzMlOUZlbm1p/bmlzdGVyaW5fQmVh/dGVfTWVpbmwtUmVp/c2luZ2VyX2RpZV9p/bmRpc2NoZV9GaW5h/bnptaW5pc3Rlcmlu/X05pcm1hbGFfU2l0/aGFyYW1hbl9pbl9X/aWVuXyUyODU0NDQ1/Mzk3MDI1JTI5XyUy/OGNyb3BwZWQlMjku/anBnP3V0bV9zb3Vy/Y2U9ZW4ud2lraXBl/ZGlhLm9yZyZ1dG1f/Y2FtcGFpZ249cGFy/c2VyJnV0bV9jb250/ZW50PXRodW1ibmFp/bA"
    }
  return (
    <>
    
    
        <button onClick={()=>{
            createUsers(userData)
            setDone(true)
        }}>

            create
        </button>

        {done?"created":"pending...."}
    
    </>
  )
}

export default Create
