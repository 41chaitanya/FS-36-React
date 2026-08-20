import React from 'react'
import { NavLink } from 'react-router'
import { MdHome } from "react-icons/md"
import { LuSquarePlay } from "react-icons/lu"
import { RiTelegram2Line } from "react-icons/ri"
import { IoSearchOutline } from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa"

const navLinkClass = ({ isActive }) =>
    `flex items-center gap-4 rounded-xl px-4 py-3 text-base font-medium transition-colors duration-150 cursor-pointer
    ${isActive
        ? "bg-gray-100 font-semibold text-black"
        : "text-gray-800 hover:bg-gray-100 hover:text-black"
    }`

const SideNav = () => {
    return (
        <nav className="fixed left-0 top-0 flex h-screen w-64 flex-col gap-1 border-r border-gray-200 bg-white px-4 py-8">

            {/* Instagram logo */}
            <div className="mb-6 px-4 text-2xl font-bold tracking-tight select-none">
                Instagram
            </div>

            <NavLink to="/" className={navLinkClass}>
                <MdHome className="text-2xl shrink-0" />
                <span>Home</span>
            </NavLink>

            <NavLink to="/explore" className={navLinkClass}>
                <IoSearchOutline className="text-2xl shrink-0" />
                <span>Search</span>
            </NavLink>

            <NavLink to="/reels" className={navLinkClass}>
                <LuSquarePlay className="text-2xl shrink-0" />
                <span>Reels</span>
            </NavLink>

            <NavLink to="/messages" className={navLinkClass}>
                <RiTelegram2Line className="text-2xl shrink-0" />
                <span>Messages</span>
            </NavLink>

            <NavLink to="/notifications" className={navLinkClass}>
                <FaRegHeart className="text-2xl shrink-0" />
                <span>Notifications</span>
            </NavLink>

        </nav>
    )
}

export default SideNav