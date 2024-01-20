import { Link } from "react-router-dom"
import { AuthStore } from "../store/AuthStore"
import { useAuthStore } from "../hooks"


export const Navbar = () => {
    const user = AuthStore(state=>state.user)
    const {startLogout} = useAuthStore()
  return (
        <header className="text-gray-500 bg-white body-font w-full p-3">
            <div className="container  flex justify-between flex-wrap p-5 flex-col md:flex-row items-center shadow-sm">
                <Link to={'/landing'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="ml-3 font-bold text-3xl">Shortify</span>
                </Link>
                {
                    !user || !user.username 
                    ? (
                        <div className="flex gap-4">
                <Link to={'/auth/login'} className="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700">
                    Log In
                </Link>
                <Link to={'/auth/register'} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Register
                </Link>
                </div>
                    )
                    :(
                        <div className="flex items-center gap-2">
                        <Link to={'/home'}>Dashboard</Link>
                        <button onClick={startLogout} className="px-5 py-3 text-white duration-150 bg-red-600 rounded-full hover:bg-red-500 active:bg-red-700">Logout</button>
                        </div>
                    )
                } 

               
            </div>
    </header>
  )
}
