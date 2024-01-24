import { useState } from "react"
import { useMainStore } from "../../hooks"
import { useForm } from "../../hooks/useForm"
import { AuthStore } from "../../store/AuthStore"
import { useNavigate } from "react-router-dom"

const initialForm = {
    urlName : '',
    fullUrl: ''
}

export const AddLink = () => {
    const{urlName,fullUrl,onInputChange} = useForm(initialForm)
    const[error,setError] = useState(false)
    const user = AuthStore(state=>state.user)
    const {startAddUrl} = useMainStore()
    const navigate = useNavigate()     
    const handleSubmit =async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
         if(!urlRegex.test(fullUrl)|| urlName.length < 2 ){
            setError(!error)
            return;
         }
         startAddUrl({urlName,fullUrl,creator:user.uid})
         navigate('/home')         
        // console.log({...formState,creator:user.uid})
    }

  return (
    <section className="w-full h-[85vh] bg-white p-4 flex justify-center items-center ">
        <form onSubmit={handleSubmit} className="w-[28rem] border-2 border-gray-500 rounded-lg p-3">
            {error && <p className="text-lg text-red-500 font-medium">Provide a valid url and a name</p>}
            <div>
                <label htmlFor="urlName" className="block text-gray-800 font-semibold text-sm">Name</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="urlName"
                    value={urlName}
                    onChange={onInputChange}
                    placeholder="Name of your link"
                    className={error ? "block w-full rounded-md py-1.5 px-2 ring-1 ring-inset border-2 border-red-500 ring-red-400 focus:text-gray-800" : "block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"}
                    />
                </div>
            </div>
            <div className="mt-3">
                <label htmlFor="fullUrl" className="block text-gray-800 font-semibold text-sm">Link</label>
                <div className="mt-2">
                    <input
                    type="url"
                    name="fullUrl"
                    placeholder="enter a url"
                    value={fullUrl}
                    onChange={onInputChange}
                    className={error ? "block w-full rounded-md py-1.5 px-2 ring-1 ring-inset border-2 border-red-500 ring-red-400 focus:text-gray-800" : "block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"}
                    />
                </div>
            </div>
            <button type="submit" className="w-full rounded mt-3 bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400">Add</button>
        </form>
    </section>
  )
}
