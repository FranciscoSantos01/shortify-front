import { useState } from "react"
import { Loader } from "."
import { UrlType } from "../helpers/types"

const initalState ={
    fullUrl :''
}
const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'
export const ShortenUrlForm = () => {
    const[url,setUrl] = useState<UrlType>({})
    const[loading,setLoading] = useState(false)
    const[formState, setFormState] = useState(initalState)
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setFormState({
            ...formState,
            [name]:value
        });
    }

    const getShortURl = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoading(!loading)
        try {
            const response = await fetch(`${URL}/short`,{
                method:'POST',
                headers:{"Content-type": "application/json;charset=UTF-8"},
                body: JSON.stringify({fullUrl:formState.fullUrl})
            })
            const data = await response.json();
            if(data.ok){
                setLoading(false)
                setUrl(data.newUrl)
                setFormState(initalState)
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className=" flex justify-center items-center w-full h-auto light mt-5">
            <div className="w-[80%] background rounded-lg shadow-md p-6 flex flex-col items-center gap-2">
                <h2 className="text-2xl font-bold text-white mb-4 text-center">Create you short url</h2>
                <form onSubmit={getShortURl} className="flex items-center justify-center gap-4 w-[80%] ">
                <input name="fullUrl" value={formState.fullUrl} onChange={handleChange} placeholder="Enter your url" className="w-full bg-gray-100 text-gray-800 border-0 rounded-md p-2  focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
                <button type='submit' className="bg-gradient-to-r from-indigo-500 w-[18rem] to-blue-500 text-white font-bold py-2 px-4 rounded-md  hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Shorten it!</button>
                </form>
                <div>
                    {loading && <Loader />}
                    {url.fullUrl && (
                        <div className="p-2">
                        <p className="text-blue-400 font-medium">{`${URL}/short/${url.shortUrl}`}</p>
                        </div>
                    )}
                </div>     
            </div>
        </div>
  )
}
