import { useState } from "react"
import { useAuthStore } from "../../hooks"
import { useForm } from "../../hooks/useForm"

const initialState  ={
    username :'',
    email: '',
    password:'',
    password2:''
}
export const Register = () => {

     const{username,email,password,password2,onInputChange}=useForm(initialState)
     const[disabled, setDisabled] =useState(false)
     const{startRegister}=useAuthStore()
     const handleForm = async(e:React.FormEvent)=>{
        e.preventDefault()
        setDisabled(!disabled)
        if(password !== password2) return alert('Password must match') 
        await startRegister({username,email,password})
        setDisabled(false)
     }
  return (
    <section className="w-full h-[85vh] p-4 flex justify-center items-center bg-white ">
        <form onSubmit={handleForm} className="w-[28rem] border-2 border-gray-500 rounded-lg p-3">
            <div >
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Username</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                    placeholder="Username"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
            </div>
            <div className="mt-3">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Email</label>
                <div className="mt-2">
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    placeholder="email@something.com"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
            </div>
            <div className="mt-3">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Password</label>
                <div className="mt-2">
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    placeholder="password"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
            </div>
            <div className="mt-3">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Confirm Password</label>
                <div className="mt-2">
                    <input
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={onInputChange}
                    placeholder="password"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
            </div>
            <button type="submit" disabled={disabled} className="w-full rounded mt-3 bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400">Create User</button>
        </form>
    </section>
  )
}
