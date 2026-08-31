import React, { useEffect, useState } from 'react'
import { deleteById, getAllUser, updateAllDataById, updateById } from '../apis/usersApi'

const Users = () => {
    const [users, setUsers] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        (async () => {
            const allUsers = await getAllUser()
            setUsers(allUsers)
        })()
    }, [update])
    return (
        <div>
            {users.map((u) => {
                return <div key={u._id}>
                    {u.name}
                    {u.email}
                    <img src={u.profileImageUrl} alt="" />
                    <button onClick={async() => {
                        const detail = {
                            name: "Amit ",
                            email: "homeMisnister@gmail.com",
                            password: "12345678",
                            gender: "male",
                            profileImageUrl: "https://imgs.search.brave.com/n4CR7RGslXirS3GBNPdACQ8WjEJf7SuUKQ0uZvje5-c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcy/MjE4NDU2L3Bob3Rv/L211bWJhaS1pbmRp/YWFwcmlsLTIxLWJq/cC1wcmVzaWRlbnQt/YW1pdC1zaGFoLWR1/cmluZy10aGUtaW5h/dWd1cmF0aW9uLW9m/LXRoZS0yOXRoLXNh/dmFya2FyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1IMXF0/MmFqWXlIUFdQbGJK/X3h1TzhDX2lBcVhG/MGdjY0o4bUpsVGY3/QlZvPQ"
                        }
                        const isUpdate =await  updateAllDataById(u._id, detail)
                        setUpdate(isUpdate)

                    }}>updateAll</button>


                    <button onClick={()=>{
                        const updated= updateById(u._id,{
                            name:"nirmala ji"
                        })
                        setUpdate(updated)

                    }}>update</button>

                    <button onClick={()=>{
                        const deleated=deleteById(u._id)
                        setUpdate(deleated)

                    }}>delete</button>
                </div>
            })}
        </div>
    )
}

export default Users
