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
    <div className="users-container">
        {users.map((u) => {
            return (
                <div className="user-card" key={u._id}>
                    <img
                        className="user-image"
                        src={u.profileImageUrl}
                        alt={u.name}
                    />

                    <div className="user-details">
                        <h3>{u.name}</h3>
                        <p>{u.email}</p>
                    </div>

                    <div className="user-actions">
                        <button
                            className="update-all-btn"
                            onClick={async () => {
                                const detail = {
                                    name: "Amit",
                                    email: "homeMisnister@gmail.com",
                                    password: "12345678",
                                    gender: "male",
                                    profileImageUrl: "https://imgs.search.brave.com/n4CR7RGslXirS3GBNPdACQ8WjEJf7SuUKQ0uZvje5-c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcy/MjE4NDU2L3Bob3Rv/L211bWJhaS1pbmRp/YWFwcmlsLTIxLWJq/cC1wcmVzaWRlbnQt/YW1pdC1zaGFoLWR1/cmluZy10aGUtaW5h/dWd1cmF0aW9uLW9m/LXRoZS0yOXRoLXNh/dmFya2FyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1IMXF0/MmFqWXlIUFdQbGJK/X3h1TzhDX2lBcVhG/MGdjY0o4bUpsVGY3/QlZvPQ"
                                }

                                const isUpdate = await updateAllDataById(u._id, detail)
                                setUpdate(isUpdate)
                            }}
                        >
                            Update All
                        </button>

                        <button
                            className="update-btn"
                            onClick={async () => {
                                const updated = await updateById(u._id, {
                                    name: "nirmala ji"
                                })
                                setUpdate(updated)
                            }}
                        >
                            Update
                        </button>

                        <button
                            className="delete-btn"
                            onClick={async () => {
                                const deleted = await deleteById(u._id)
                                setUpdate(deleted)
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )
        })}
    </div>
)
}

export default Users
