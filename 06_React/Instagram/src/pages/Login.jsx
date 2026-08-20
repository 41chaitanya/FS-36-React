import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { UserContext } from '../context/UserContext.jsx'

const Login = () => {
    const { login } = useContext(UserContext)

    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const navigate = useNavigate()

    const submit = (data) => {
        login(data)
        reset()
        navigate("/")
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">

            <form
                onSubmit={handleSubmit(submit)}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
            >
                <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
                    Login
                </h1>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        {...register("email")}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        {...register("password")}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
                >
                    Login
                </button>
            </form>

        </div>
    )
}

export default Login