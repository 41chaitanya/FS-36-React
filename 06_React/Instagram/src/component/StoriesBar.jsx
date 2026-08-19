import React, { useContext } from 'react'
import { StoriesContext } from '../context/StoriesContaxt.jsx'

const StoriesBar = () => {
    const { users } = useContext(StoriesContext)

    return (
        <div className="flex gap-4 overflow-x-auto p-4">
            {users.map((user) => (
                <button
                    key={user.id}
                    className="flex min-w-[70px] flex-col items-center gap-1"
                >
                    <img
                        src={user.image}
                        alt={user.firstName}
                        className="h-16 w-16 rounded-full object-cover ring-2 ring-pink-500 p-[2px]"
                    />

                    <span className="w-full truncate text-center text-sm font-medium text-gray-800">
                        {user.firstName}
                    </span>
                </button>
            ))}
        </div>
    )
}

export default StoriesBar