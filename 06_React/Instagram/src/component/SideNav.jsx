import React from 'react'
import { NavLink } from 'react-router'
import { MdHome } from "react-icons/md"
import { LuSquarePlay } from "react-icons/lu"
import { RiTelegram2Line } from "react-icons/ri"
import { IoSearchOutline } from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa"

const SideNav = () => {
    return (
        <nav className="fixed left-0 top-0 flex h-screen w-64 flex-col gap-2 border-r border-gray-200 bg-white p-6">

            <NavLink
                to="/"
                className="flex items-center gap-4 rounded-lg px-4 py-3 text-lg hover:bg-gray-100"
            >
                <MdHome className="text-2xl" />
                <span>Home</span>
            </NavLink>

            <NavLink
                to="/reels"
                className="flex items-center gap-4 rounded-lg px-4 py-3 text-lg hover:bg-gray-100"
            >
                <LuSquarePlay className="text-2xl" />
                <span>Reels</span>
            </NavLink>

            <NavLink
                to="/messages"
                className="flex items-center gap-4 rounded-lg px-4 py-3 text-lg hover:bg-gray-100"
            >
                <RiTelegram2Line className="text-2xl" />
                <span>Messages</span>
            </NavLink>

            <NavLink
                to="/explore"
                className="flex items-center gap-4 rounded-lg px-4 py-3 text-lg hover:bg-gray-100"
            >
                <IoSearchOutline className="text-2xl" />
                <span>Search</span>
            </NavLink>

            <NavLink
              
                className="flex items-center gap-4 rounded-lg px-4 py-3 text-lg hover:bg-gray-100"
            >
                <FaRegHeart className="text-2xl" />
                <span>Notifications</span>
            </NavLink>

        </nav>
    )
}

export default SideNav