import { useState } from "react"
import { useAuthStore } from "../../hooks"
import { useForm } from "../../hooks/useForm"

const initialForm = {
    email:'',
    password:''
}
export const Login = () => {
     const[disabled, setDisabled] = useState(false)
     const[error,setError] = useState(false)
     const{onInputChange,email,password} = useForm(initialForm)
     const {startLogin} = useAuthStore()
     const handleSubmit = async(e:React.FormEvent)=>{
       e.preventDefault();
       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       if(!emailRegex.test(email) || password.length < 1){
        setError(!error)
        return;
       }
       setError(false)
       setDisabled(!disabled)
       if(email !== '' &&  password !== ''){
          setDisabled(false)
          return await startLogin({email,password})
       }
       setDisabled(false)
     }
  return (
    <section className="w-full h-[85vh] p-3 flex justify-center items-center bg-white ">
        <form onClick={handleSubmit} className="w-[28rem] border-2 border-gray-500 rounded-lg p-3">
            <div className="mt-3">
                <label htmlFor="email" className="block text-gray-800 font-semibold text-sm">Email</label>
                {error &&  <p className="text-lg text-red-500 font-medium">Provide a valid email and password</p> }
                <div className="mt-2">
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    placeholder="email@something.com"
                    className={error ? "block w-full rounded-md py-1.5 px-2 ring-1 ring-inset border-2 border-red-500 ring-red-400 focus:text-gray-800" : "block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"}
                    />
                </div>
            </div>
            <div className="mt-3">
                <label htmlFor="password" className="block text-gray-800 font-semibold text-sm">Password</label>
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
            <button disabled={disabled} type='submit' className="w-full rounded mt-3 bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400">Log In</button>
        </form>
    </section>
  )
}
